// 引入vue-i18n
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './message'

Vue.use(VueI18n)
Vue.locale = () => {}

// 获取本机系统语言 && 自动设置语言
// tips：用户设置的语言优先，然后读取浏览器的，最后是手动设置
const lang = window.localStorage.getItem('language') || navigator.language.split('-')[0] || 'zh'
localStorage.setItem('language', lang)

// 配置默认语言(全局)
const i18n = new VueI18n({
  locale: lang,
  messages
})

// 持续存储本地多语言
const base = {
  install: function (Vue, options) {
    Vue.prototype.setLocalLang = function (arg) {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      localStorage.setItem('language', this.$i18n.locale)
    }
  }
}

export { i18n, base }
