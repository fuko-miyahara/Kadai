<template>
  <div>

    <navbar />

    <div class="main-container">

      <div class="itemlist">
        <div
          v-for="item in items"
          :key="item.id"
          class="item">
          <h5> {{ item.name }} </h5>
          <img
            :src="sampleImagePath"
            width="275.2"
            height="186.88"
            alt="image of the item"
            title="sample image">
          <span class="item-description">{{ item.description }}</span>
          <span class="item-price">¥{{ item.price }} / 1{{ item.unit }}</span>
          <b-button class="add-button"> カートに入れる </b-button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
    import NavBar from './navbar-common'
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import bButton from 'bootstrap-vue/es/components/button/button'
    import store from '../store/kadai-store'

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
        },
        computed: {
          items () {
              return store.state.items
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

  /* items のCSS */

  .itemlist {
    margin-top: 120px;
    text-align: center;
  }

  .item {
    display: inline-block;
    width: 30%;
    margin-right: 15px;
    margin-bottom: 10px;
    border: #DCDCDC 1px solid;
    border-radius: 5px;
    padding: 15px;
  }

  .item h5 {
    color: #2b546a;
    margin: 0 0 10px 0;
    display: block;
  }

  .item-description {
    display: block;
    height: 20px;
    font-size: 13px;
    color: #2b546a;
    margin: 5px 10px;
  }

  .item-price {
    display: inline-block;
    color: #2b546a;
    margin-right: 10px;
  }

  .item .add-button {
    background-color: #ff577b;
    font-weight: normal;
    font-size: 10px;
    padding: 4px 8px;
    border: none;
  }

</style>
