import * as language from './language' // 导入iview自带语言包

const MSGS = {
  en: {
    message: {
      'hello': 'hello world',
      'home': 'Home',
      'refresh': 'Refresh',
      'tips': 'Welcome to Your Vue.js App',
      'switch': 'Switch',
      'navigator': 'navigator',
      'tradeManager': 'tradeManager'
    }
  },
  zh: {
    message: {
      'hello': '世界你好',
      'home': '主页',
      'refresh': '刷新',
      'tips': '欢迎使用vue应用',
      'switch': '开关',
      'navigator': '导航',
      'tradeManager': '交易所管理'
    }
  }
}

export default {
  en_us: Object.assign(MSGS.en.message, language.en),
  zh_cn: Object.assign(MSGS.zh.message, language.zh)
}
