// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import iView from 'iview'
import router from './router'
import App from './App'
import './assets/css/base.less'
import 'iview/dist/styles/iview.css'
import './directives/index'
import './utils/tool'
import filters from './utils/filter'
// svg-icon
import './commons/icon/iconfont'
import IconSvg from 'Commons/icon/icon-svg'
// img-icon
import IconImg from 'Commons/icon/icon-img'
import {i18n, base} from './language/index'

// Icon 组件
Vue.component('icon-svg', IconSvg)
Vue.component('icon-img', IconImg)

// Filter
Vue.use(filters)

Vue.config.productionTip = false

Vue.use(iView, {
  i18n: function (path, options) {
    let value = i18n.t(path, options)
    if (value !== null && value !== undefined) {
      return value
    }
    return ''
  }
})

Vue.use(base)
// 加载进度条 todo 跳转
router.beforeEach(async (to, from, next) => {
  iView.LoadingBar.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }
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
