<template>
  <div class="foods">
    <foods-nav 
      :fixed="fixed"
      :foods="foods" 
      @navClick="handleNavClick"
      :activeMenu="activeMenu"
    ></foods-nav>
    <foods-list 
      :fixed="fixed"
      :foods="foods"  
      :activeMenu="activeMenu"
    ></foods-list>
    <foods-cart></foods-cart>
  </div>
</template>

<script>
import FoodsNav from './components/FoodsNav.vue'
import FoodsList from './components/FoodsList.vue'
import FoodsCart from './components/FoodsCart.vue'
import axios from 'axios'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
    name: 'foods',
    components: {
      FoodsNav,
      FoodsList,
      FoodsCart,
    },
    props: {
      foods: Array
    },
    data() {
      return {
        fixed: false,
        activeMenu: -1
      }
    },
    computed: {
      ...mapState(['menuHeight'])
    },
    methods:{
      handleScroll(){
        const top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        
        if(top >= 143){
          this.fixed = true
        }else{
          this.fixed = false
        }

        for(let i = this.menuHeight.length; i>-1;i--){
          if(top + 70 > this.menuHeight[i]){
            this.activeMenu = i;
            break;
          }
        }
      },
      handleNavClick(para) {
        window.scrollTo({
          top: this.menuHeight[para] - 40,
          behavior: 'smooth'
        })
        setTimeout( () => {
          this.activeMenu = para
        }, 100)
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
