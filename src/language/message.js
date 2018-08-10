import * as language from './language' // 导入iview自带语言包

const MSGS = {
  en: {
    message: {
      'hello': 'hello world',
      'home': 'Home',
      'refresh': 'Refresh',
      'tips': 'Welcome to Your Vue.js App',
      'switch': 'Switch',
      'navigator': 'navigator'
    }
  },
  zh: {
    message: {
      'hello': '世界你好',
      'home': '主页',
      'refresh': '刷新',
      'tips': '欢迎使用vue应用',
      'switch': '开关',
      'navigator': '导航'
    }
  }
}

export default {
  en: Object.assign(MSGS.en.message, language.en),
  zh: Object.assign(MSGS.zh.message, language.zh)
}
