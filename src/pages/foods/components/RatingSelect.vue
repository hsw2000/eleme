<template>
  <div class="rating-select">
      <div class="type">
            <div :class="['type-all', selectType==2?'active':'']" @click="selectType=2">{{desc.all}}
                <span>{{positiveRates.length+negativeRates.length}}</span>
            </div>
            <div :class="['type-positive', selectType==0?'active':'']" @click="selectType=0">{{desc.positive}}
                <span>{{positiveRates.length}}</span>
            </div>
            <div :class="['type-negative', selectType==1?'active':'']" @click="selectType=1">{{desc.negative}}
                <span>{{negativeRates.length}}</span>
            </div>
      </div>
      <div class="switch" @click="switchOnlyContent">
          <span class="icon" :style="iconStyle">√</span>
          <span class="text" :style="textStyle">只看有内容的评价</span>
      </div>
  </div>
</template>

<script>
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;
export default {
    name: 'Rating',
    props: {
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          };
        }
      }
    },
    data() {
        return {
            selectType: ALL,
            onlyContent: false,
        }
    },
    computed: {
        positiveRates() {
            return this.ratings.filter((rating) => {
                return rating.rateType === POSITIVE
            })
        },
        negativeRates() {
            return this.ratings.filter((rating) => {
                return rating.rateType === NEGATIVE
            })
        },
        currentRates() {
            if(this.selectType == ALL){
                if(this.onlyContent == true) {
                    return this.ratings.filter((rating) => {
                        return rating.text != ""
                    })
                }else{
                    return this.ratings
                }
            }
            if(this.onlyContent == true) {
                return this.ratings.filter((rating) => {
                    return rating.rateType === this.selectType && rating.text != ""
                })
            }else{
                return this.ratings.filter((rating) => {
                    return rating.rateType === this.selectType
                })
            }
        },
        iconStyle() {
            if(!this.onlyContent){
                return ''
            }else{
                return {
                    'backgroundColor': 'rgb(0,160,220)'
                }
            }
        },
        textStyle() {
            if(!this.onlyContent){
                return ''
            }else{
                return {
                    'color': 'rgb(0,160,220)'
                }
            }
        }
    },
    methods: {
        switchOnlyContent() {
            this.onlyContent = !this.onlyContent
        }
    },
    watch: {
        currentRates() {
            this.$emit('ratesChange' ,this.currentRates)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .type
        padding .36rem 0
        overflow hidden
        border-bottom 1px solid rgba(7,17,27,0.1)
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
        .active
            font-weight bolder
            font-size .26rem
        .type-all
            background-color rgb(0,160,220)
            color white
        .type-positive
            background-color rgba(0,160,220,0.7)
            color rgb(255,255,255)
        .type-negative
            background-color rgba(77,85,93,0.2)
    .switch
        height .48rem
        font-size .24rem
        padding .24rem 0
        border-bottom 1px solid rgba(7,17,27,0.1)
        .icon
            display inline-block
            height .48rem
            width .48rem
            margin-right .08rem
            color white
            background-color rgb(147, 153, 159)
            border-radius 50%
            vertical-align middle
            font-size .48rem
            text-align center
            font-weight bolder
        .text
            line-height .48rem
            color rgb(147, 153, 159)
</style>