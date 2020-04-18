<template>
  <div class="foods-cart">
    <div class="logo-wrapper" @click="logoClicked">
        <div class="logo">
            <svg class="cart-icon" version="1.1" width="80%" viewBox="0 0 90.156 89.89" stroke="#FFF">
                <path class="main-path-3" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
    M14.973,26.021V15.296c0-1.109-0.865-2.292-1.922-2.628L1.49,8.99 M62.354,55.639c0,1.109-0.101,2.236-0.224,2.504
    c-0.123,0.268-1.684,0.487-2.793,0.487H17.989c-1.109,0-2.242-0.098-2.517-0.218c-0.275-0.12-0.5-1.664-0.5-2.773V23.273
    c0-1.109,0.101-2.236,0.224-2.504c0.123-0.268,1.684-0.487,2.793-0.487h41.348c1.109,0,2.242,0.098,2.517,0.218 c0.275,0.12,0.5,1.664,0.5,2.773V55.639z"></path>
                <line class="center-line-3" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="30.863" y1="20.74" x2="30.863" y2="58.63"></line>
                <line class="center-line-3" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="46.837" y1="20.74" x2="46.837" y2="58.63"></line>
                <line class="center-line-3" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="15.973" y1="33.308" x2="61.24" y2="33.308"></line>
                <line class="center-line-3" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="15.973" y1="46.285" x2="61.125" y2="46.285"></line>
                <circle class="wheel-3" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="23.442" cy="64.554" r="5.924"></circle>
                <circle class="wheel-3" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="53.314" cy="64.554" r="5.924"></circle>
            </svg>
        </div>
        <i class="select_num">{{total.totalNum}}</i>
    </div>
    <p>
        <span class="total">￥{{total.totalPrice}}</span>
        <span class="gap">|</span>
        <span class="tips">另需配送费4元</span>
    </p>
    <div class="buy" :style="{backgroundColor: total.totalPrice>=40?'red':'rgb(43,51,59)'}">{{carMesg}}</div>
    <foods-selected v-show="showSelected"></foods-selected>
  </div>
</template>

<script>
import FoodsSelected from './FoodsSelected.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'FoodsCart',
    components: {
        FoodsSelected
    },
    data() {
        return {
            showSelected: false,
        }
    },
    computed: {
        ...mapGetters(['total']),
        carMesg() {
            if(this.total.totalPrice < 40){
                return '还差'+(40-this.total.totalPrice)+'元起送'
            }else{
                return '结算'
            }
        }
    },
    methods: {
        logoClicked() {
            this.showSelected = !this.showSelected;
        }
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
        z-index 10
        .logo-wrapper
            position relative
            display flex
            left .18rem
            bottom .25rem
            width 1rem
            height 1rem
            align-items center
            justify-content center
            background-color #07111b
            border-radius 50%
            .logo
                position relative
                width 80%
                height 0
                padding-bottom 80%
                overflow hidden
                background-color #00a0dc
                border-radius 50%
                svg
                    position absolute
                    top 12%
                    left 18%
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