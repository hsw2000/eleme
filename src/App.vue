<template>
  <div id="app">
    <intro></intro>
    <navigation :fixed="fixed"></navigation>
    <foods :fixed="fixed"></foods>
  </div>
</template>

<script>
import intro from '@/components/intro/intro.vue'
import navigation from '@/components/navigation/navigation.vue'
import foods from '@/pages/foods/foods.vue'

export default {
  name: 'App',
  data() {
    return {
      fixed: false
    }
  },
  components: {
    intro,
    navigation,
    foods
  },
  methods:{
      handleScroll(){
        const top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(top);
        
        if(top >= 143){
          //navigation固定吸顶
          this.fixed = true
          //nav，list改为固定定位并加上better-scroll
        }else{
          this.fixed = false
        }
      }
  },
  mounted() {
      window.addEventListener('scroll', this.handleScroll, false)
  }
}
</script>

<style>

</style>
