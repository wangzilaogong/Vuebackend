import Vue from 'vue'
import Router from 'vue-router'

// 布局
const Layout = () => import('@/components/layout')
const NotFound = () => import('@/components/404')

Vue.use(Router)

export default new Router({
  routes: [
    { // 后台
      path: '/',
      name: 'Index',
      redirect: 'dashboard',
      meta: { title: '交易所管理后台', requireLogin: true },
      component: Layout,
      children: [ ]
    }, { /* Not Found 路由，必须是最后一个路由 */
      path: '*',
      component: NotFound,
      meta: {
        title: '找不到页面'
      }
    }
  ]
})
