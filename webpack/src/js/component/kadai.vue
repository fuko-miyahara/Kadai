<template>
  <div class="WholePage">

    <header>
      <h2> Shop Name </h2>
      <span>Description of the shop will appear here.</span>
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
          <span>description will appear here.</span>
        </div>
        <div class="item">
          <h5>item#3 Name</h5>
          <span>description will appear here.</span>
        </div>
        <div class="item">
          <h5>item#3 Name</h5>
          <span>description will appear here.</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

    export default {
        components: {
            FontAwesomeIcon

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
    background-color: lightgray;
    margin-bottom: 20px;
  }

  header h2 {
    color: dimgray;
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
