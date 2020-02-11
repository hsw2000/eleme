<template>
  <div class="intro">
    <div class="bg-blur"></div>
    <div class="title">
      <div class="img-wrapper">
        <img src="https://cube.elemecdn.com/8/4b/fd919773f0c93f5fcc784dd2b2ea2png.png?x-oss-process=image/format,webp/resize,w_150" alt="">
      </div>
      <div class="info">
        <p class="name">{{seller.name}}</p>
        <p class="desc">{{seller.description}} / {{seller.deliveryTime}}分钟送达</p>
        <p class="sale">{{seller.supports[0].description}}</p>
      </div>
      <div class="more" @click="openIntroDetail">{{seller.supports.length}}个<span>&lt;</span></div>
    </div>
    <div class="inform">
      <p>{{seller.bulletin}}</p>
      <div>&lt;</div>
    </div>
    <intro-detail
      v-show="showDetail"
      @close="closeIntroDetail"
    ></intro-detail>
  </div>
</template>

<script>
import IntroDetail from './IntroDetail.vue'
export default {
    name: 'intro',
    components: {
      IntroDetail
    },
    data() {
      return {
        showDetail: false
      }
    },
    methods: {
      openIntroDetail() {
        this.showDetail = true
      },
      closeIntroDetail() {
        this.showDetail = false
      }
    },
    computed: {
      seller() {
        return this.$store.state.seller
      }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl'
  .intro
    position relative
    color #fff
    .bg-blur
      position absolute
      top 0
      height 143px
      left 0
      right 0
      background no-repeat center/100% url("https://cube.elemecdn.com/7/80/9ad0dcbfebb7069bb9a98082e67f6jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp")
      filter blur(5px)
    .title
      position relative
      display flex
      align-items center
      height 115px
      .img-wrapper
        margin 0 .48rem 0 .32rem
        width 1.28rem
        height 1.28rem
        img 
          width 100%
      .info
        margin-right .5rem
        flex 1
        display flex
        flex-direction column
        justify-content space-around
        height 64px
        .name
          font-size .32rem
        .desc
          font-size .24rem
        .sale
          font-size .2rem
      .more
        position absolute
        top 1.34rem
        right .24rem
        width .86rem
        height .43rem
        font-size .2rem
        line-height .48rem
        text-align center
        border-radius .24rem
        background rgba(0,0,0,.8)
        span
          position relative
          display inline-block
          top -3px
          left 3px
          transform rotate(180deg)
    .inform
      position relative
      background rgba(0,0,0,.3)
      p
        margin 0 .76rem 0 .54rem
        font-size .2rem
        line-height 28px
        ellipsis()
      div
        position absolute
        top 0
        right .2rem
        transform rotate(180deg)
        line-height 28px
</style>>
