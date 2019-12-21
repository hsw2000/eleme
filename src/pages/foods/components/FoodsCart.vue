<template>
  <div class="foods-cart">
    <div class="logo-wrapper"></div>
    <p>
        <span class="total">￥40</span>
        <span class="gap">|</span>
        <span class="tips">另需配送费4元</span>
    </p>
    <div class="buy">还差10元起送</div>
  </div>
</template>

<script>
export default {
    name: 'FoodsCart'
}
</script>

<style lang="stylus" scoped>
    .foods-cart
        position fixed
        left 0
        right 0
        bottom 0
        height 48px
        background-color #07111b
        .logo-wrapper
            position absolute
            left .18rem
            bottom .25rem
            width 50px
            height 50px
            border-radius 50%
        p
            margin-left 1.58rem
            line-height 48px
            .total
                font-size .32rem
                color #fff
            .gap
                font-weight bolder
                margin 0 .24rem
                color #2b333b
            .tips 
                font-size .2rem
                color #2b333b
        .buy
            position absolute
            right 0
            bottom 0
            height 48px
            width 2.1rem
            line-height 48px
            font-size .24rem
</style>