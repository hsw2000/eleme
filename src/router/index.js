import Vue from 'vue'
import Router from 'vue-router'

import foods from '@/pages/foods/foods.vue'
import rates from '@/pages/rates/rates.vue'
import seller from '@/pages/seller/seller.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'foods',
      component: foods
    },{
      path: '/rates',
      name: 'rates',
      component: rates
    },{
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
})
