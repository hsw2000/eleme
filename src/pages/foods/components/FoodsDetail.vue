<template>
    <transition name="move">
        <div class="foods-detail" v-show="showDetail">
            <div class="image">
                <img :src="food.image" :alt="food.name">
                <i @click="handleBackClick">返回</i>
            </div>
            <div class="info">
                <p class="name">{{food.name}}</p>
                <p class="sale"><span class="sale-amount">月售{{food.sellCount}}份</span><span class="rate">好评率{{food.rating}}%</span></p>
                <p class="price">￥<span class="price-amount">{{food.price}}</span><span class="price-del" v-show="food.oldPrice">￥{{food.oldPrice}}</span> </p>
                <div class="button">
                    <transition-group name="toggle">
                        <div 
                            v-if="!food.selectAmount" 
                            class="add-to-car"
                            @click="handleAddToCarClick"  
                            :key="1"
                        >添加至购物车</div>
                        <foods-control 
                            v-else
                            :cfood="food"
                            :key="2"
                            @increaseClick="handleIncreaseClick"
                        ></foods-control>
                    </transition-group>
                </div>
            </div>
            <div class="introduce">
                <p class="introduce-title">商品介绍</p>
                <p class="introduce-content">{{food.info}}</p>
            </div>
            <div class="rates">
                <p class="title">商品评价</p>
                <div class="choose">
                    <div class="choose-all">全部<span>{{goodRatesNum+badRatesNum}}</span> </div>
                    <div class="choose-good">推荐<span>{{goodRatesNum}}</span> </div>
                    <div class="choose-bad">吐槽<span>{{badRatesNum}}</span> </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import FoodsControl from './FoodsControl.vue'
export default {
    name: 'FoodsDetail',
    components: {
        FoodsControl
    },
    props: {
        food: {
            type: Object
        }
    },
    data() {
        return {
            showDetail: false,
            selectedNum: 0,
            goodRatesNum: 0,
            badRatesNum: 0
        }
    },
    methods: {
        handleBackClick() {
            this.showDetail = false
            this.goodRatesNum = 0
            this.badRatesNum = 0
        },
        show() {
            this.food.ratings.forEach(element => {
                if(element.rateType == 1){
                    this.goodRatesNum++
                }else{
                    this.badRatesNum++
                }
            });
            this.showDetail = true
        
        },
        handleAddToCarClick(event) {
            this.$store.commit('addGoods', this.food)
            this.selectedNum++;
            this.$emit('increaseClick', event.target)
        },
        handleIncreaseClick(el) {
        //el为加号那个div元素
        this.$emit('increaseClick', el)
      }
    }
}
</script>

<style lang="stylus" scoped>
    .move-enter-active, .move-leave-active
        transition all .4s
    .move-enter, .move-leave-to
        transform translateX(100%)
    .foods-detail
        position fixed
        top 0
        bottom 47px
        left 0
        right 0
        background-color #fff
        z-index 8
        overflow scroll
        .image
            width 100%
            height 100vw
            overflow hidden
            img
                height 100%
                object-fit cover
            i 
                position absolute
                left .1rem
                top .1rem
                background-color #000
                color #fff
        .info
            position relative
            margin-left .36rem
            .name
              margin-top .36rem
              font-size .28rem
              font-weight bold
            .sale
              margin-top .16rem
              font-size .2rem
              color rgb(147,153,159)
              .sale-amount
                margin-right .12rem
            .price
              margin .36rem 0
              color red
              font-size .2rem
              line-height .48rem
              height .48rem
              font-weight bold
              .price-amount
                font-size .28rem
              .price-del
                margin-left .24rem
                line-height .48rem
                color rgb(147,153,159)
                text-direction line-through
            .button
                position absolute
                right .2rem
                bottom 0
                .add-to-car
                    padding 0 0.28rem
                    line-height .48rem
                    white-space nowrap
                    background-color #00a0dc
                    color white
                    border-radius .5rem
                .toggle-enter-active
                    transition all .4s
                .toggle-leave-active
                    transition all .4s
                    position absolute
                .toggle-enter, .toggle-leave-to
                    opacity .2
                .toggle-move
                    transition transform .4s
        .introduce
            border-top .32rem solid #f3f5f7
            border-bottom .32rem solid #f3f5f7
            padding .36rem
            .title
                font-size .28rem
            .introduce-content
                margin .12rem .16rem 0 .16rem
                font-size .2rem
                line-height .48rem
                color rgb(77,85,93)
        .rates
            padding .36rem
            .title
                font-size .28rem
            .choose
                margin-top .24rem
                overflow hidden
                div
                    float left
                    margin-right .16rem
                    font-size .24rem
                    line-height .32rem
                    padding .16rem .24rem
                    color rgb(77,85,93)
                    span
                        margin-left .1rem
                        font-size .2rem
                .choose-all
                    background-color rgb(0,160,220)
                    color white
                .choose-good
                    background-color rgba(0,160,220,0.2)
                .choose-bad
                    background-color rgba(77,85,93,0.2)
</style>