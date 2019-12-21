<template>
  <nav class="foods-nav" ref="wrapper" :style='navStyle'>
      <ul>
        <li v-for="(item, index) in menu" 
            :key=index
            :class="['menu-item', {'active': index==activeMenu}]"
        >
          <span>{{item}}
            <span :class="{'active': index == activeMenu}"></span>
          </span>
        </li>
      </ul>
    </nav>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'FoodsNav',
    props: {
      fixed: Boolean
    },
    data() {
      return {
        menu: ['热销榜','单人特色套餐单人特色套餐单人特色单人特色单人特色','特色粥品','精选热菜','爽口凉菜','半成品','饭','面','热销榜','热销榜','饭'],
        activeMenu: 0,
        navStyle: {}
      }
    },
    watch: {
      fixed() {
        if(this.fixed == true){
          this.navStyle= {
            'position': 'fixed',
            'left': '0',
            'width': '22%',
            'top': '40px',
            'bottom': '48px',
            'overflow': 'hidden'
          }
          
        }else{
          this.navStyle = {}
          // this.scroll = null
        }
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {click: true, tap: true})
    }
}
</script>

<style lang="stylus" scoped>
    .foods-nav
      width 22%
      background-color #f3f5f7
      ul
        .menu-item
          display table
          height 1.08rem
          width 100%
          box-sizing border-box 
          padding 14px 12px
          span
            position relative
            display table-cell
            vertical-align middle
            font-size .24rem
            span.active
              position absolute
              top 0
              bottom 0
              left -12px
              width 2px
              background-color red
        .active
          background-color #fff
</style>