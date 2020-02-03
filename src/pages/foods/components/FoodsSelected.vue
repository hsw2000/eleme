<template>
  <div class="foods-selected">
      <p class="title">购物车</p>
      <ul class="main" ref="wrapper">
        <li v-for="(item) in this.$store.state.selected" :key="item.id">
          <span>{{item.name}}</span>
          <span class="price">￥{{item.price}}</span>
          <foods-control
            :cname="item.name"
            :cprice="item.price"
            :camount="item.amount"
          ></foods-control>
        </li>        
      </ul>
  </div>
</template>

<script>
import FoodsControl from './FoodsControl.vue'
export default {
    name: 'FoodsSelected',
    components:{
      FoodsControl
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .foods-selected
        position absolute
        bottom 47px
        left 0
        right 0
        max-height 267px
        padding-top 999px
        z-index -1
        background-color rgba(0,0,0,.6)
        .title
          height 39px
          padding-left .37rem
          line-height 39px
          background-color #f3f5f7
        .main
            max-height 228px
            overflow scroll
            background-color #fff
            &::-webkit-scrollbar
              width 0
              display none
            li
              position relative
              height 49px 
              padding-left .37rem
              line-height 49px
              .price
                position absolute 
                top 0rem
                right 2.04rem
                color red
              .control
                position absolute 
                right .24rem
                top .25rem
</style>