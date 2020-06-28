<template>
  <div class="control">
    <transition name="rotate">
      <div
        class="decrease"
        @click.stop.prevent="handleDecrease()"
        v-show="cfood.selectAmount>0"
      >-</div>
    </transition>
    <transition name="rotate">
      <span
        class="choose-amount"
        v-show="cfood.selectAmount>0"
      >{{cfood.selectAmount}}</span>
    </transition>
    <div 
      class="increase"
      @click.stop.prevent="handleIncrease()"
    >+</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
    name: 'FoodsControl',
    props: {
      cfood: Object
    },
    methods:{
      handleIncrease() {
        this.$store.commit('addGoods', this.cfood)
        this.$emit('increaseClick', event.target)

      },
      handleDecrease() {
        this.$store.commit('minusGoods',this.cfood)
      }
    }
}
</script>

<style lang="stylus" scoped>
    .control
        display flex
        justify-content space-around
        font-size .2rem
        line-height .48rem
        text-align center
        .decrease
          width .5rem
          height .5rem
          box-sizing border-box
          border 2px solid #00a0dc
          border-radius 50%
          font-size .4rem
          line-height .4rem
          color #00a0dc
          font-weight bold
        .increase
          width .5rem
          height .5rem
          box-sizing border-box
          background-color #00a0dc
          border-radius 50%
          font-size .4rem
          line-height .5rem
          color white
          font-weight brotatold
        span
          margin 0 10px
        .rotate-enter-active, .rotate-leave-active
          transition all .4s
        .rotate-enter, .rotate-leave-to
          opacity 0
          transform translateX(30px) rotate(180deg)
</style>