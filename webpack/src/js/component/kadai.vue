<template>
  <div>

    <header>
      <b-navbar
        toggleable="md"
        type="dark"
        variant="info">
        <b-navbar-toggle
          target="nav_collapse" />
        <b-navbar-brand
          href="#">
          NavBar
        </b-navbar-brand>
        <b-collapse
          id="nav_collapse"
          is-nav>
          <b-navbar-nav>
            <b-nav-item
              href="#">
              Link1
            </b-nav-item>
            <b-nav-item
              href="#">
              Link2
            </b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav
            class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                type="text"
                placeholder="Search" />
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                type="submit">
                Search
              </b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <div class="main-container">

      <div class="categories">
        <div class="category">
          <span>Category 1</span>
          <font-awesome-icon :icon="faCoffee" />
        </div>
        <div class="category">
          <span>Category 2</span>
          <font-awesome-icon :icon="faCoffee" />
        </div>
        <div class="category">
          <span>Category 3</span>
          <font-awesome-icon :icon="faCoffee" />
        </div>
      </div>

      <div class="itemlist">
        <div class="item">
          <h5>item#1 Name</h5>
          <b-button> ADD </b-button>
          <span>description will appear here.</span>
        </div>
        <div class="item">
          <h5>item#3 Name</h5>
          <b-button> ADD </b-button>
          <span>description will appear here.</span>
        </div>
        <div class="item">
          <h5>item#3 Name</h5>
          <b-button> ADD </b-button>
          <span>description will appear here.</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
    import bButton from 'bootstrap-vue/es/components/button/button'
    import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
    import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle'
    import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand'
    import bNabvarNav from 'bootstrap-vue/es/components/navbar/navbar-nav'
    import bNavItems from 'bootstrap-vue/es/components/nav/nav-item'
    import bNavForms from 'bootstrap-vue/es/components/nav/nav-form'
    import bCollapse from 'bootstrap-vue/es/components/collapse/collapse'
    import bFormInput from 'bootstrap-vue/es/components/form-input/form-input'

    export default {
        components: {
            FontAwesomeIcon,
            'b-button': bButton,
            'b-navbar': bNavbar,
            'b-navbar-toggle': bNavbarToggle,
            'b-navbar-brand': bNavbarBrand,
            'b-navbar-nav': bNabvarNav,
            'b-nav-item': bNavItems,
            'b-nav-form': bNavForms,
            'b-collapse': bCollapse,
            'b-form-input': bFormInput
        },
        computed: {
            faCoffee () {
                return faCoffee
            }
        },
        methods: {}
    }
</script>

<style scoped src="../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"></style>
<style scoped src="../../../../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css"></style>

<style scoped>

  /* HeaderのCSS */

  header{
    width: 100%;
    height: auto;
    background-color: #D8C3A5;
    margin-bottom: 20px;
  }

  header h2 {
    color: #E85A4F;
  }

  .category {
    margin-right: 10px;
    display: inline;
  }

  .item h5 {
    color: pink;
    margin: 0px;
  }

  .item {
    margin-bottom: 10px;
  }

  .categories {
    margin-bottom: 20px;
  }

</style>
