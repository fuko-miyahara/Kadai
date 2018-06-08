<template>
  <div>

    <navbar />

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
    import NavBar from './navbar-common'
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import bButton from 'bootstrap-vue/es/components/button/button'

    export default {
        components: {
            'navbar': NavBar,
            FontAwesomeIcon,
            'b-button': bButton,
        },
        data: function () {
            return {
                sampleImagePath: "/Users/miyahara/git/gw-kadai/gw-kadai-by-myself/webpack/src/assets/sample-image.png"
            }
        }
    }
</script>

<style scoped src="../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"></style>
<style scoped src="../../../../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css"></style>

<style scoped>

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
