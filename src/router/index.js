import Vue from 'vue'
import Router from 'vue-router'
import Hi from '@/components/test/hiTest'
import Mmp from '@/components/test/normalLayout'
import Mmp2 from '@/components/test/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hi',
      component: Hi
    },
    {
      path: '/home',
      name: 'Mmp',
      component: Mmp
    },
    {
      path: '/demo',
      name: 'Mmp2',
      component: Mmp2
    }
  ]
})
