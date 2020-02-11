<template>
  <div class="foods-list" ref="wrapper" :style="listStyle">
    <div>
      <div 
      class="list"
      v-for="(item1, index1) in foods"
      :key="index1"
      >
        <h6>{{item1.name}}</h6>
        <div 
          class="item border-bottom"
          v-for="(item2, index2) in item1.foods"
          :key="index2"
        >
          <div class="img-wrapper" @click="handleImgClick(item2)">
            <img :src="item2.image" :alt="item2.name">
          </div>
          <div class="info">
            <p class="name">{{item2.name}}</p>
            <p class="desc">{{item2.description}}</p>
            <p class="sale">
              <span class="sale-amount">月售{{item2.sellCount}}份</span>
              <span class="rate">好评率{{item2.rating}}%</span>
            </p>
            <p class="price">￥<span class="price-amount">{{item2.price}}</span></p>
          </div>
          <foods-control
            :cfood="item2"
            @increaseClick="handleIncreaseClick"
          ></foods-control>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import FoodsControl from './FoodsControl.vue'
export default {
    name: 'FoodsList',
    components: {
      FoodsControl
    },
    props: {
      fixed: Boolean,
      foods: Array,
      activeMenu: Number
    },
    data() {
      return {
        listStyle: {}
      }
    },
    watch: {
      fixed() {
        if(this.fixed == true){
          this.listStyle = {
            'margin-left': '22%'
          }
        }else{
          this.listStyle = {}
        }
      }
    },
    methods:{
      handleImgClick(food){
        this.$emit("imgClick", food)
      },
      handleIncreaseClick(el) {
        //el为加号那个div元素
        this.$emit('increaseClick', el)
      }
    },
    mounted() {
      // 在元素加载完成后再获取元素，暂未找到更好的方法
      setTimeout( () => {
          const menu = document.getElementsByClassName('list')
          let menuHeight = []
          for(let i = 0; i<menu.length; i++){
            menuHeight.push(menu[i].offsetTop)
          }
          this.$store.commit('initMenu', menu)
          this.$store.commit('initMenuHeight', menuHeight)
        }, 1000)
    } 
}
</script>

<style lang="stylus" scoped>
    .foods-list
      flex 1
      padding-bottom 40px
      .list
        h6
          padding-left .28rem
          background-color #f3f5f7
          font-size .24rem
          line-height .58rem
        .item
          position relative
          padding-top .36rem
          display flex
          height 1.84rem
          .img-wrapper
            margin 0 .18rem 0 .36rem
            width 1.14rem
            img 
              width 100%
          .info
            margin-right .5rem
            p
              margin-bottom .18rem
            .name
              font-size .28rem
            .desc
              font-size .2rem
            .sale
              font-size .2rem
              .sale-amount
                margin-right .12rem
            .price
              color red
              font-size .2rem
              .price-amount
                font-size .28rem
          .control
            position absolute
            top 1.54rem
            right .24rem
      
</style>