import Vue from 'vue'
import Router from 'vue-router'
import Arch from '@/components/Arch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Arch',
      component: Arch
    }
  ]
})
