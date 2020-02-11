<template>
  <div class="rates">
    <div class="overview">
      <div class="ov-left">
        <p class="score">{{seller.score}}</p>
        <p>综合评分</p>
        <p>高于周边商家{{seller.rankRate}}%</p>
      </div>
      <!-- <div class="ov-split"></div> -->
      <div class="ov-right">
        <div class="ov-right-content">
          <div>
            <span class="text">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div>
            <span class="text">食物评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div>
            <span class="text">送达时间</span>
            <span class="time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
    </div>
    <div class="split"></div>
    <div class="ratings">
      <rating-select
        :ratings="ratings"
        @ratesChange="updateRates"
      ></rating-select>
      <ul>
        <li 
          v-for="(rating, index) in currentRates"
          :key="index"
        >
          <img :src="rating.avatar" />
          <p class="username">{{rating.username}}</p>
          <p class="star-and-time">
            <star
              :size="24" :score="rating.score"  
            ></star>
            <span class="time">{{rating.deliveryTime}}分钟送达</span>
          </p>
          <p class="content">{{rating.text}}</p>
          <p class="recommend">
            <span
              v-for="(item, index) in rating.recommend"
              :key="index"
              class="item"
            >
              {{item}}
            </span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Star from '@/components/star/star.vue'
import RatingSelect from '@/pages/foods/components/RatingSelect.vue'
export default {
    name: 'rates',
    components: {
      Star,
      RatingSelect
    },
    data() {
      return {
        currentRates: this.$store.state.ratings
      }
    },
    computed: {
      ratings() {
        return this.$store.state.ratings
      },
      seller() {
        return this.$store.state.seller
      }
    },
    methods: {
      updateRates(newRates) {
        this.currentRates = newRates
      },
      _parseDate(str) {
        let newTime = new Date(parseInt(str))
        return newTime.toLocaleString()
      }
    }
}
</script>

<style lang="stylus" scoped>
  .overview
    display flex
    padding .36rem 0
    border-top 1px solid rgba(147, 153, 159, 0.3)
    border-bottom 1px solid rgba(147, 153, 159, 0.3)
    .ov-left
      width 36.6%
      border-right 1px solid rgba(147, 153, 159, 0.3)
      p
        text-align center
        &:first-child
          margin-top .1rem
          font-size .46rem
          line-height .56rem
          color rgb(255, 153, 0)
        &:nth-child(2)
          font-size .24rem
          line-height .52rem
          color rgb(7, 17, 27)
        &:last-child
          margin-bottom .12rem
          font-size .20rem
          line-height .20rem
          color rgb(147, 153, 159)
    .ov-right
      flex 1
      display flex
      .ov-right-content
        margin 0 auto
        .star
          position relative
          top .05rem
        span
          font-size .24rem
          line-height .52rem
        .text
          margin-right .24rem
          color rgb(7, 17, 27)
        .score
          margin-left .24rem
          color rgb(255, 153, 0)
        .time
          color rgb(147, 153, 159)
  .split
    width 100%
    height .3rem
    background-color #f3f5f7
  .ratings
    padding 0 .36rem
    ul
      li
        position relative
        padding .36rem 0 .36rem .8rem
        border-bottom 1px solid rgba(7,17,27,0.1)
        img
          position absolute
          top .36rem
          left 0
          display block
          width .56rem
          height .56rem
          border-radius 50%
        .username
          font-size .2rem
          line-height .24rem
          color rgb(7,17,27)
        .star-and-time
          .time
            margin-left .12rem
            font-size .2rem
            line-height .2rem
            font-weight 200
            color rgb(147,153,159)
        .content
          margin .12rem 0 .16rem 0
          font-size .24rem
          line-height .36rem
          color rgb(7,17,27)
        .recommend
          .item
            display inline-block
            padding 0 .12rem
            margin-left .16rem
            border 1px solid rgba(7,17,27, 0.1)
            border-radius 2px
            font-size .18rem
            line-height .32rem
            color rgb(147,153,159)
</style>