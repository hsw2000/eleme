<template>
  <div class="foods">
    <foods-nav 
      :fixed="fixed"
      :foods="foods" 
      @navClick="handleNavClick"
      :activeMenu="activeMenu"
    ></foods-nav>
    <foods-list 
      :fixed="fixed"
      :foods="foods"  
      :activeMenu="activeMenu"
      @imgClick="handleImgClick"
      @increaseClick="dropBall"
    ></foods-list>
    <foods-cart></foods-cart>
    <foods-detail
      :food="detailFood"
      ref="detail"
      @increaseClick="dropBall"
    ></foods-detail>
    <div class="ball-container" v-for="(ball, index) in balls" :key="index">
      <transition 
        name="drop"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
      >
        <div v-show="ball.show" class="ball">
          <div class="ball-inner"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import FoodsNav from './components/FoodsNav.vue'
import FoodsList from './components/FoodsList.vue'
import FoodsCart from './components/FoodsCart.vue'
import FoodsDetail from './components/FoodsDetail.vue'
import axios from 'axios'
export default {
    name: 'foods',
    components: {
      FoodsNav,
      FoodsList,
      FoodsCart,
      FoodsDetail
    },
    data() {
      return {
        fixed: false,
        activeMenu: 0,
        detailFood: {},
        balls: [{show: false},{show: false},{show: false},{show: false},{show: false}],
        dropBalls: []
      }
    },
    computed: {
      foods() {
        return this.$store.state.goods
      },
      menuHeight() {
        return this.$store.state.menuHeight
      },
      menu() {
        return this.$store.state.menu
      }
    },
    methods:{
      handleScroll(){
        const top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(top >= 143){
          this.fixed = true
        }else{
          this.fixed = false
        }
        for(let i = this.menuHeight.length; i>-1;i--){
          if(top + 70 > this.menuHeight[i]){
            this.activeMenu = i;
            break;
          }
        }
      },
      handleNavClick(para) {
        // window.scrollTo({
        //   top: this.menuHeight[para] - 40,
        //   behavior: 'smooth'
        // })
        this.menu[para].scrollIntoView({
          block: "start",
          behavior: "smooth"
        })
        this.$nextTick( () => {
          this.activeMenu = para
        })
      },
      handleImgClick(food) {
        this.detailFood = food
        this.$refs.detail.show()
      },
      dropBall(el){
        for(let i = 0; i < this.balls.length; i++){
          let ball = this.balls[i];
          if(!ball.show){
            ball.show = true
            ball.el = el
            this.dropBalls.push(ball)
            break
          }
        }
      },
      beforeEnter(el) {
        let length = this.dropBalls.length
        let ball = this.dropBalls[length - 1];
          if (ball && ball.show) {
            let rect = ball.el.getBoundingClientRect();
            let x = rect.left - 32;
            let y = - (window.innerHeight - rect.top - 39);
            el.style.webkitTransform =`translateY(${y}px)`;
            el.style.transform = `translateY(${y}px)`;
            let inner = el.getElementsByClassName('ball-inner')[0]
            inner.style.webkitTransform = `translateX(${x}px)`
            inner.style.transform = `translateX(${x}px)`
            return
          }
      },
      enter(el) {
        let rf = el.offsetHeight
        this.$nextTick(() => {
          el.style.webkitTransform = 'translateY(0)';
          el.style.transform = 'translateY(0)';
          let inner = el.getElementsByClassName('ball-inner')[0]
          inner.style.webkitTransform = `translateX(0)`
          inner.style.transform = `translateX(0)`
         })
        // done()
      },
      afterEnter(el) {
        let ball = this.dropBalls.shift();
        if(ball){
          ball.show = false
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, false)
      this.$once('hook:beforeDestroy', function () {
        window.removeEventListener('scroll', this.handleScroll, false)
      })
    }

}

</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl'
  .foods
    display flex
    .ball-container
        position fixed
        left 32px
        bottom 22px
        z-index 200
        width 16px
        height 16px
        .ball
          width 100%
          height 100%
          transition all .4s cubic-bezier(0.49,-0.29,0.75,0.41)
          .ball-inner
            width 100%
            height 100%
            border-radius 50%
            background-color #00a0dc
            transition all .4s
</style>>
