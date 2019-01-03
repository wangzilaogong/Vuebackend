// filter  过滤函数 demo
import Validator from './validator'
let _filters = {}
/**
 *字符串修正
 * @param str 时间字符串
 * @param n 到现实第几位 123456 n：3 str = 123
 * */
_filters.strSplit = (str, n) => {
  return str ? str.substring(0, n) : '不存在str'
}

_filters.timeStrSplit = (str, n) => { // 时间本地化然后格式化
  const localTimeStr = Validator.localTimeZone(str)
  return localTimeStr ? localTimeStr.substring(0, n) : '不存在localTimeStr'
}

export default vue => {
  Object.keys(_filters).forEach(key => {
    vue.filter(key, _filters[key])
  })
}
