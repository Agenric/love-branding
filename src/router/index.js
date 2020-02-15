import Vue from 'vue'
import Router from 'vue-router'
import LoveBranding from '@/components/LoveBranding'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoveBranding',
      component: LoveBranding
    }
  ]
})
