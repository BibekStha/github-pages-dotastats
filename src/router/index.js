import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Heroes from '@/components/Heroes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/heroes',
      name: 'Heroes',
      component: Heroes
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }

  ]
})
