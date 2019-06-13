// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './api/mock'
import Vue from 'vue'
import store from './vuex/store'
import iView from 'iview'
import router from './router'
import App from './App'
import './assets/css/base.css'
import 'iview/dist/styles/iview.css'
import {i18n, base} from './language/index'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(base)

// fix i18n & iview confict
Vue.use(iView, {
  i18n: function (path, options) {
    let value = i18n.t(path, options)
    if (value !== null && value !== undefined) {
      return value
    }
    return ''
  }
})

// 加载进度条
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})
router.afterEach(route => {
  iView.LoadingBar.finish()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
