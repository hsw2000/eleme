<template>
  <div class="seller">
    <div class="overview">
      <div class="ov-top">
        <p>{{seller.name}}</p>
        <div class="star-wrapper">
          <star
            :size="36"
            :score="seller.score"
          ></star>
          <span>({{seller.ratingCount}})</span>
          <span>月售{{seller.sellCount}}单</span>
        </div>
      </div>
      <div class="ov-bottom">
        <div>
          <p>起送价</p>
          <p class="data">{{seller.minPrice}}<span class="small">元</span></p>
        </div>
        <div>
          <p>商家配送</p>
          <p class="data">{{seller.deliveryPrice}}<span class="small">元</span></p>
        </div>
        <div>
          <p>平均配送时间</p>
          <p class="data">{{seller.deliveryTime}}<span class="small">分钟</span></p>
        </div>
      </div>
    </div>
    <div class="split"></div>
    <div class="inform">
      <h2>公告与活动</h2>
      <p class="bulletin">{{seller.bulletin}}</p>
      <div 
          v-for="(item, index) in seller.supports"
          :key="index"
          class="support-item"
        >
          <span :class="[classMap[item.type], 'support-icon']"></span>
          <span class="support-text">{{item.description}}</span>
        </div>
    </div>
    <div class="split"></div>
    <div class="photos">
      <h2>商家实景</h2>
      <div class="img-wrapper">
        <img 
          v-for="(img, index) in seller.pics"
          :src="img"
          :key="index">
      </div>
    </div>
    <div class="split"></div>
    <div class="infos">
      <h2>商家信息</h2>
      <p
        v-for="(info, index) in seller.infos"
        :key="index"
      >{{info}}</p>
    </div>
  </div>
</template>

<script>
import Star from '@/components/star/star.vue'

export default {
  name: 'seller',
  components: {
    Star
  },
  data() {
    return {
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  },
  computed: {
    seller() {
      return this.$store.state.seller
    },
    ratesNum() {
      return this.$store.state.ratings.length
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl'
  .overview
    .ov-top
      margin 18px .36rem 0 .36rem
      border-bottom 1px solid rgba(147, 153, 159, 0.3)
      &>p
        margin-bottom .16rem
        font-size .32rem
        line-height .28rem
        color rgb(7, 17, 27)
      .star-wrapper
        margin-bottom .36rem
        span
          font-size .2rem
          margin-left .24rem
          color rgb(77,85,93)
    .ov-bottom
      display flex
      div
        flex 1
        margin 18px 0
        border-right 1px solid rgba(147, 153, 159, 0.3)
        &:last-child
          border none 
        p
          text-align center
          &:first-child
            margin-bottom .08rem
            font-size .2rem
            line-height .2rem
            color rgb(147, 153, 159)  
          &.data
            font-size .48rem
            line-height .48rem
            font-weight 200
            color rgb(7, 17, 27)
            .small
              font-size .2rem
  .split
    width 100%
    height .3rem
    background-color #f3f5f7
    border-top 1px solid rgba(147, 153, 159, 0.3)
    border-bottom 1px solid rgba(147, 153, 159, 0.3)
  .inform
    padding .36rem
    padding-bottom 0
    h2
      font-size .28rem
      line-height .28rem
      font-weight 400
    .bulletin
      margin .16rem .24rem .32rem .24rem
      font-size .24rem
      line-height .48rem
      font-weight 200
      color red
    .support-item
      padding .32rem 0
      border-top 1px solid rgba(147, 153, 159, 0.3)
      .support-icon
        display inline-block
        width .32rem
        height .32rem
        margin: 0 .12rem 0 .24rem
        vertical-align: top
        background-size: .32rem .32rem
        background-repeat: no-repeat
        &.decrease
          bg-image('../../assets/images/decrease_4')
        &.discount
          bg-image('../../assets/images/discount_4')
        &.guarantee
          bg-image('../../assets/images/guarantee_4')
        &.invoice
          bg-image('../../assets/images/invoice_4')
        &.special
          bg-image('../../assets/images/special_4')
  .photos
    padding .36rem
    h2
      margin-bottom .24rem
      font-size .28rem
      line-height .28rem
      font-weight 400
    .img-wrapper
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      img
        margin-right .12rem
        width 2.4rem
        height 90px
  .infos
    padding .36rem
    h2
      margin-bottom .24rem
      font-size .28rem
      line-height .28rem
      font-weight 400
    p
      padding .32rem .24rem
      border-top 1px solid rgba(147, 153, 159, 0.3)
      font-size .24rem
      line-height .32rem
      &:last-child
        padding-bottom 0

</style>