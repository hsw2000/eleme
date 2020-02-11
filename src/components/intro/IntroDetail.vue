<template>
  <div class="intro-detail">
    <div class="wrapper">
      <div class="content">
        <h1>{{seller.name}}</h1>
        <div class="star-wrapper">
          <star
            :size="48"
            :score="seller.score"
          ></star>
        </div>
        <div class="title">
          <div class="line">
          </div>
          <div class="title-text">优惠信息</div>
          <div class="line"></div>
        </div>
        <div 
          v-for="(item, index) in seller.supports"
          :key="index"
          class="support-item"
        >
          <span :class="[classMap[item.type], 'support-icon']"></span>
          <span class="support-text">{{item.description}}</span>
        </div>
        <div class="title">
          <div class="line">
          </div>
          <div class="title-text">商家公告</div>
          <div class="line"></div>
        </div>
        <p class="bulletin">
          {{seller.bulletin}}
          {{seller.bulletin}}
          {{seller.bulletin}}
          {{seller.bulletin}}
        </p>
      </div>
    </div>
    <div class="close" @click="closeIntroDetail">
      X
    </div>
  </div>
</template>

<script>
import Star from '@/components/star/star.vue'
export default {
  name: 'IntroDetail',
  components:{
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
    }
  },
  methods: {
    closeIntroDetail() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl'
  .intro-detail
    position fixed
    overflow scroll
    top 0
    bottom 0
    left 0
    right 0
    background-color rgba(7,17,27,0.9)
    backdrop-filter blur(10px)
    z-index 100
    .wrapper
      min-height 100%
      .content
        padding 1.28rem .72rem 94px .72rem
        h1
          text-align center
          font-size .32rem
          line-height .32rem
          font-weight 700
          color #fff
        .star-wrapper
          margin .32rem 0
          text-align center
        .title
          display flex
          margin-top .36rem
          margin-bottom .48rem
          .line
            flex 1
            position relative
            top -.14rem
            border-bottom 1px solid rgba(255,255,255,0.2)
          .title-text
            margin 0 .16rem
            font-size .28rem
            line-height .28rem
            font-weight 700
            color #fff
        .support-item
          margin 0 0 .12rem .24rem
          .support-icon
            display inline-block
            width .32rem
            height .32rem
            margin-right: 4px
            vertical-align: top
            background-size: .32rem .32rem
            background-repeat: no-repeat
            &.decrease
              bg-image('../../assets/images/decrease_1')
            &.discount
              bg-image('../../assets/images/discount_1')
            &.guarantee
              bg-image('../../assets/images/guarantee_1')
            &.invoice
              bg-image('../../assets/images/invoice_1')
            &.special
              bg-image('../../assets/images/special_1')
        .support-text
          line-height .32rem
      .bulletin
        margin 0 .24rem
        font-size .24rem
        line-height .48rem
    .close
      margin-top -64px
      clear both
      text-align center
      font-size .32rem
</style>