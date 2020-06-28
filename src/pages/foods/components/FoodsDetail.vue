<template>
    <transition name="move">
        <div class="foods-detail" v-show="showDetail" ref="wrapper">
        <div>
            <div class="image">
                <img :src="food.image" :alt="food.name">
                <i @click="handleBackClick">&lt;</i>
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
                <p class="introduce-content">{{food.description}}</p>
            </div>
            <div class="rates">
                <p class="title">商品评价</p>
                <rating-select
                    :ratings="food.ratings"
                    :desc="{all:'全部',positive:'好评',negative:'吐槽'}"
                    @ratesChange="updateRates"
                ></rating-select>
                <ul class="ratings">
                    <li v-for="(rate, index) in currentRates" :key="index">
                        <p class="time">{{_parseDate(rate.rateTime)}}</p>
                        <p class="content">{{rate.text}}</p>
                        <p class="user">
                            {{rate.username}}
                            <img :src="rate.avatar" />
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </transition>
</template>

<script>
import FoodsControl from './FoodsControl.vue'
import RatingSelect from './RatingSelect.vue'
import BScroll from 'better-scroll'
export default {
    name: 'FoodsDetail',
    components: {
        FoodsControl,
        RatingSelect
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
            currentRates: []
        }
    },
    methods: {
        handleBackClick() {
            this.showDetail = false
        },
        show() {
            if(!this.scroll){
                this.scroll = new BScroll(this.$refs.wrapper, {click: true, tap: true})
            }
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
        },
        updateRates(newRates) {
            this.currentRates = newRates
        },
        _parseDate(str) {
            let newTime = new Date(parseInt(str))
            return newTime.toLocaleString( )
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
        .image
            width 100%
            height 100vw
            overflow hidden
            img
                height 100%
                object-fit cover
            i 
                position absolute
                left .2rem
                top .2rem
                width .7rem
                heigth .7rem
                line-height .7rem
                text-align center
                font-size .4rem
                background-color rgba(0,0,0,.5)
                color #fff
                border-radius 50%
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
            .ratings
                &>li
                    position relative
                    .time
                        margin-top .32rem
                        font-size .2rem
                        line-height .24rem
                        color rgb(147,153,159)
                    .content
                        margin-top .32rem
                        padding-bottom .32rem
                        border-bottom 1px solid rgba(7,17,27,0.1)
                        font-size .24rem
                        line-height .32rem
                    .user
                        position absolute 
                        top 0
                        right 0
                        font-size .2rem
                        line-height .24rem
                        margin-right .12rem
                        color rgb(147,153,159)
                        &>img
                            width .24rem
                            height .24rem
</style>