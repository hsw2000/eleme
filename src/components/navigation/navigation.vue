<template>
  <div class="navigation">
    <div :style="emptyStyle" class="empty"></div>
    <nav :style="navStyle">
      <div class="active">商品<span class="active"></span></div>
      <div>评价<span></span></div>
      <div>商家<span></span></div>
    </nav>
  </div>
  
</template>

<script>
export default {
    name: 'navigation',
    props: {
      fixed: Boolean
    },
    data() {
      return {
        emptyStyle: {},
        navStyle: {}
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
