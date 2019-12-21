<template>
  <div class="foods">
    <foods-nav :fixed="fixed"></foods-nav>
    <foods-list :fixed="fixed"></foods-list>
    <foods-cart></foods-cart>
  </div>
</template>

<script>
import FoodsNav from './components/FoodsNav.vue'
import FoodsList from './components/FoodsList.vue'
import FoodsCart from './components/FoodsCart.vue'

export default {
    name: 'foods',
    components: {
      FoodsNav,
      FoodsList,
      FoodsCart
    },
    data() {
      return {
        fixed: false
      }
    },
    methods:{
      handleScroll(){
        const top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(top >= 143){
          this.fixed = true
        }else{
          this.fixed = false
        }
      }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, false)
    },
    beforeDestroied() {
      window.removeEventListener('scroll', this.handleScroll, false)
    }

}

</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl'
  .foods
    display flex
</style>>
