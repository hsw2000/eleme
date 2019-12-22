<template>
  <div class="foods-cart">
    <div class="logo-wrapper" @click="showSelected = !showSelected">
        <div class="logo"></div>
        <i class="select_num">{{selectNum}}</i>
    </div>
    <p>
        <span class="total">￥40</span>
        <span class="gap">|</span>
        <span class="tips">另需配送费4元</span>
    </p>
    <div class="buy">还差10元起送</div>
    <foods-selected v-show="showSelected"></foods-selected>
  </div>
</template>

<script>
import FoodsSelected from './FoodsSelected.vue'

export default {
    name: 'FoodsCart',
    components: {
        FoodsSelected
    },
    data() {
        return {
            showSelected: false,
            selectNum: 0
        }
    },
    methods: {
    }
}
</script>

<style lang="stylus" scoped>
    .foods-cart
        position fixed
        left 0
        right 0
        bottom 0
        display flex
        height 48px
        background-color #07111b
        .logo-wrapper
            position relative
            display flex
            left .18rem
            bottom .25rem
            width 1rem
            height 1rem
            z-index 10
            align-items center
            justify-content center
            background-color #07111b
            border-radius 50%
            .logo
                width 80%
                height 0
                padding-bottom 80%
                overflow hidden
                background-color #00a0dc
                border-radius 50%
            i 
                position absolute
                left 60%
                top 0
                background-color red
                font-size .18rem
                line-height .32rem
                padding 0 .16rem
                color #fff
                border-radius .16rem
                box-shadow 0px 4px 8px 0px rgba(0, 0, 0, 0.4)
        p
            margin-left 0.58rem
            flex 1
            line-height 48px
            .total
                font-size .32rem
                font-weight bold
                color #fff
            .gap
                font-weight bolder
                margin 0 .24rem
                color #2b333b
            .tips 
                font-size .2rem
                color #2b333b
        .buy
            height 48px
            padding 0 .5rem
            line-height 48px
            font-size .24rem
            font-weight bold
            color #fff
            background-color rgb(43,51,59)
</style>