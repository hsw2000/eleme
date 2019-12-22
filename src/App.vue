<template>
  <div id="app">
    <intro></intro>
    <navigation></navigation>
    <router-view :foods="foodsInfo"/>
  </div>
</template>

<script>
import intro from '@/components/intro/intro.vue'
import navigation from '@/components/navigation/navigation.vue'
import foods from '@/pages/foods/foods.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    intro,
    navigation,
    foods
  },
  data() {
    return {
      sellerInfo: {},
      foodsInfo: [],
      ratingsInfo: []
    }
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/data.json')
          .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      const data = res.data
      this.sellerInfo = data.seller
      this.foodsInfo = data.goods
      this.ratingsInfo = data.rating
      console.log(this.foodsInfo);
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
