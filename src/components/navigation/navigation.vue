<template>
  <div class="navigation">
    <div :style="emptyStyle" class="empty"></div>
    <nav :style="navStyle">
      <router-link to="/" tag="div">
        <div :class="activeIndex==0?'active':''" @click="activeIndex=0">
          商品<span :class="activeIndex==0?'active':''"></span>
        </div>
      </router-link>
      <router-link to="/rates" tag="div">
        <div :class="activeIndex==1?'active':''" @click="activeIndex=1">
          评价<span :class="activeIndex==1?'active':''"></span>
        </div>
      </router-link>
      <router-link to="/saler" tag="div">
        <div :class="activeIndex==2?'active':''" @click="activeIndex=2">
          商家<span :class="activeIndex==2?'active':''"></span>
        </div>
      </router-link>
      
      
    </nav>
  </div>
  
</template>

<script>
export default {
    name: 'navigation',
    data() {
      return {
        emptyStyle: {},
        navStyle: {},
        fixed: false,
        activeIndex: 0
      }
    },
    watch: {
      fixed() {
        if(this.fixed == true){
          this.navStyle = {
            'position': 'fixed',
            'z-index': '1',
            'top': '0',
            'left': '0',
            'right': '0',
            'background-color': '#fff'
          }
          this.emptyStyle = {
            'height': '40px'
          }
        }else{
          this.emptyStyle = this.navStyle = {}
        }
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
  nav
    display flex
    height 40px
    justify-content space-around
    div
      position relative
      font-size .28rem
      line-height 40px
      span.active
        position absolute
        bottom 0
        left 0
        right 0
        height .533333vw
        background-color rgb(35, 149, 255)
    .active
      color red
</style>>
