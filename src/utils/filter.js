// filter  过滤函数 demo

let _filters = {}
/**
 *字符串修正
 * @param str 时间字符串
 * @param n 到现实第几位 123456 n：3 str = 123
 * */
_filters.strSplit = (str, n) => {
  return str ? str.substring(0, n) : '不存在str'
}

export default vue => {
  Object.keys(_filters).forEach(key => {
    vue.filter(key, _filters[key])
  })
}
