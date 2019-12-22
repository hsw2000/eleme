<template>
  <div class="foods-selected">
      <p class="title">购物车</p>
      <ul class="main" ref="wrapper">
          <li>
            <p>皮蛋瘦肉粥</p>
            <div class="add">
                <div class="decrease">-</div>
                <span class="choose-amount">1</span>
                <div class="increase">+</div>
            </div>    
          </li><li>
            <p>皮蛋瘦肉粥</p>
            <div class="add">
                <div class="decrease">-</div>
                <span class="choose-amount">1</span>
                <div class="increase">+</div>
            </div>    
          </li><li>
            <p>皮蛋瘦肉粥</p>
            <div class="add">
                <div class="decrease">-</div>
                <span class="choose-amount">1</span>
                <div class="increase">+</div>
            </div>    
          </li>
          <li>
            <p>皮蛋瘦肉粥</p>
            <div class="add">
                <div class="decrease">-</div>
                <span class="choose-amount">1</span>
                <div class="increase">+</div>
            </div>    
          </li>
          <li>
            <p>皮蛋瘦肉粥</p>
            <div class="add">
                <div class="decrease">-</div>
                <span class="choose-amount">1</span>
                <div class="increase">+</div>
            </div>    
          </li>
          <li>
            <p>皮蛋瘦肉粥</p>
            <div class="add">
                <div class="decrease">-</div>
                <span class="choose-amount">1</span>
                <div class="increase">+</div>
            </div>    
          </li>
          <li>
            <p>皮蛋瘦肉粥</p>
            <div class="add">
                <div class="decrease">-</div>
                <span class="choose-amount">1</span>
                <div class="increase">+</div>
            </div>    
          </li>
          <li>
            <p>皮蛋瘦肉粥</p>
            <div class="add">
                <div class="decrease">-</div>
                <span class="choose-amount">1</span>
                <div class="increase">+</div>
            </div>    
          </li>
      </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'FoodsSelected',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
      //this.scroll = new BScroll(this.$refs.wrapper, {click: true, tap: true})
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
        z-index 5
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
            li
              position relative
              height 49px 
              padding-left .37rem
              line-height 49px
              .add
                position absolute
                display flex
                justify-content space-around
                align-items center
                top 0
                bottom 0
                right .24rem
                font-size .2rem
                line-height .48rem
                text-align center
                .decrease
                    width .43rem
                    height .43rem
                    box-sizing border-box
                    border 2px solid #00a0dc
                    border-radius 50%
                    line-height .43rem
                    color #00a0dc
                    font-weight bold
                .increase
                    width .43rem
                    height .43rem
                    box-sizing border-box
                    background-color #00a0dc
                    border-radius 50%
                    line-height .48rem
                    color white
                    font-weight bold
                span
                    margin 0 10px
</style>