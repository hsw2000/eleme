<template>
  <div class="gallery"
    @click="handleGalleryClick"
    v-show="show"
  >
    <div 
        class="wrapper" 
        :style="{height: aspectRatio + 'vw'}"
    >
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item, index) in list" :key="index">
                <img class="swiper-img" :src=item />
            </swiper-slide> 
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'CommonGallery',
    components: {
        swiper,
        swiperSlide
    },
    props:{
        list: Array,
        // 图片的宽高比，0~100的数字
        aspectRatio: Number
    },
    data() {
      return {
        show: false,
        swiperOption: {
          pagination: {
              el: '.swiper-pagination',
              type: 'fraction'
          },
          observer:true,
          observeParents:true,
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
        handleGalleryClick(e) {
            if(e.target.nodeName.toUpperCase() != 'IMG'){
                this.show = false
            }
        },
        showGallery(index) {
            this.swiper.slideTo(index)
            this.show = true
        }
    }
}
</script>

<style lang="stylus" scoped>
    .gallery >>> .swiper-container
        overflow inherit
    .gallery
        position fixed
        z-index 99
        display flex
        top 0
        bottom 0
        left 0
        right 0
        background-color #000
        flex-direction column
        justify-content center
        .wrapper
            width 100%
            height 67vw
            img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
</style>