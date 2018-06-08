<template>
  <div>

    <b-navbar
      toggleable="md"
      fixed="top"
      class="navbar-css">
      <b-navbar-brand
        href="#">
        ShopNameHere
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item
          href="#">
          New
        </b-nav-item>
        <b-nav-item
          href="#">
          Popular
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
        <font-awesome-icon
          :icon="faShoppingCart"
          class="cart-icon"/>
      </b-navbar-nav>
    </b-navbar>

    <div class="main-container">

      <div class="categories">
        <div class="category">
          <span>Food</span>
        </div>
        <div class="category">
          <span>Drinks</span>
        </div>
        <div class="category">
          <span>Category 3</span>
        </div>
      </div>

      <div class="itemlist">
        <div class="item">
          <h5>item#1 Name</h5>
          <b-button> ADD </b-button>
          <img
            :src="sampleImagePath"
            width="275.2"
            height="186.88"
            alt="image of the item"
            title="sample image">
          <span class="item-description">description will appear here.</span>
        </div>
        <div class="item">
          <h5>item#2 Name</h5>
          <b-button class="add-button"> ADD </b-button>
          <span>description will appear here.</span>
        </div>
        <div class="item">
          <h5>item#3 Name</h5>
          <b-button> ADD </b-button>
          <span>description will appear here.</span>
        </div>
        <div class="item">
          <h5>item#4 Name</h5>
          <b-button> ADD </b-button>
          <span>description will appear here.</span>
        </div>
        <div class="item">
          <h5>item#5 Name</h5>
          <b-button> ADD </b-button>
          <span>description will appear here.</span>
        </div>
        <div class="item">
          <h5>item#6 Name</h5>
          <b-button> ADD </b-button>
          <span>description will appear here.</span>
        </div>
        <div class="item">
          <h5>item#7 Name</h5>
          <b-button> ADD </b-button>
          <span>description will appear here.</span>
        </div>
        <div class="item">
          <h5>item#8 Name</h5>
          <b-button> ADD </b-button>
          <span>description will appear here.</span>
        </div>
        <div class="item">
          <h5>item#9 Name</h5>
          <b-button> ADD </b-button>
          <span>description will appear here.</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart'
    import bButton from 'bootstrap-vue/es/components/button/button'
    import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
    import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand'
    import bNabvarNav from 'bootstrap-vue/es/components/navbar/navbar-nav'
    import bNavItems from 'bootstrap-vue/es/components/nav/nav-item'
    import bNavForms from 'bootstrap-vue/es/components/nav/nav-form'
    import bFormInput from 'bootstrap-vue/es/components/form-input/form-input'

    export default {
        components: {
            FontAwesomeIcon,
            'b-button': bButton,
            'b-navbar': bNavbar,
            'b-navbar-brand': bNavbarBrand,
            'b-navbar-nav': bNabvarNav,
            'b-nav-item': bNavItems,
            'b-nav-form': bNavForms,
            'b-form-input': bFormInput
        },
        data: function () {
            return {
                sampleImagePath: "/Users/miyahara/git/gw-kadai/gw-kadai-by-myself/webpack/src/assets/sample-image.png"
            }
        },
        computed: {
            faShoppingCart () {
                return faShoppingCart
            }
        },
        methods: {}
    }
</script>

<style scoped src="../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"></style>
<style scoped src="../../../../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css"></style>

<style scoped>

  /* NavbarのCSS */

  .navbar-css {
    background-color: #D8C3A5;
    opacity: 0.9;
  }

  .cart-icon {
    margin: 15px;
  }

  /* main-container */

  .main-container {
    margin: 20px;
  }

  /* categories のCSS */

  .categories {
    margin-top: 70px;
    margin-bottom: 20px;
  }

  .category {
    margin-right: 10px;
    display: inline;
  }

  /* items のCSS */

  .itemlist {
    text-align: center;
  }

  .item {
    display: inline-block;
    height: 300px;
    width: 30%;
    margin-right: 15px;
    border: #DCDCDC 1px solid;
    border-radius: 5px;
    padding: 10px;
  }

  .item h5 {
    color: #E98074;
    margin: 0px;
    display: inline-block;
  }

  .add-button {
    margin-left: 20px;
    display: inline-block;
  }

  .item {
    margin-bottom: 10px;
  }

  .item-description {
    display: block;
  }

</style>
