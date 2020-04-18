<template>
  <div class="foods-selected">
      <p class="title">
        <span>购物车</span>
        <span class="clear-all" @click="clearAll">清空</span>  
      </p>
      <ul class="main" ref="wrapper">
        <li v-for="item in selected" :key="item.id">
          <span>{{item.name}}</span>
          <span class="price">￥{{item.price}}</span>
          <foods-control
            :cfood="item"
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
    },
    computed: {
      selected: {
        get() {
          return this.$store.state.selected
        }
      }
    },
    methods: {
      clearAll() {
        this.$store.commit('clearAll');
      }
    },
}
</script>

<style lang="stylus" scoped>
    .foods-selected
        position absolute
        bottom 48px
        left 0
        right 0
        max-height 267px
        padding-top 999px
        z-index -1
        background-color rgba(0,0,0,.6)
        .title
          position relative
          height 39px
          padding-left .37rem
          line-height 39px
          background-color #f3f5f7
          .clear-all
            position absolute
            right 9px
            top 9px
            padding 2px 6px
            height 19px
            line-height 19px
            background-color rgb(210,240,240)
            border 1px solid rgb(205,205,205)
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