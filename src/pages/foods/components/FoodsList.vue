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
          <div class="img-wrapper">
            <img :src="item2.img" :alt=item2.name>
          </div>
          <div class="info">
            <p class="name">{{item2.name}}</p>
            <p class="desc">{{item2.description}}</p>
            <p class="sale"><span class="sale-amount">月售{{item2.sellCount}}份</span><span class="rate">好评率{{item2.rating}}%</span></p>
            <p class="price">￥<span class="price-amount">{{item2.price}}</span></p>
          </div>
          <div class="add">
            <div class="decrease">-</div>
            <span class="choose-amount">1</span>
            <div class="increase">+</div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
    name: 'FoodsList',
    props: {
      fixed: Boolean,
      foods: Array,
      activeMenu: Number
    },
    data() {
      return {
        listStyle: {},
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
      },
      foods() {
        setTimeout( () => {
          const menu = document.getElementsByClassName('list')
          this.$store.state.menuHeight = []
          for(let i = 0;i<menu.length;i++){
            this.$store.state.menuHeight.push(menu[i].offsetTop)
          }
        }, 200)
      }
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
          .add
            position absolute
            display flex
            justify-content space-around
            top 1.34rem
            right .24rem
            font-size .2rem
            line-height .48rem
            text-align center
            .decrease
              width .43rem
              height .43rem
              box-sizing border-box
              border 2px solid #00a0dc
              border-radius 50%
              line-height .43rem
              color #00a0dc
              font-weight bold
            .increase
              width .43rem
              height .43rem
              box-sizing border-box
              background-color #00a0dc
              border-radius 50%
              line-height .48rem
              color white
              font-weight bold
            span
              margin 0 10px
</style>