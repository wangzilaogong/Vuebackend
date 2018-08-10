// filter  过滤函数 demo
const filterObj = {
  limitTitle: function (value, errMsg) {
    if (value) {
      return errMsg
    }
  }
}

export default filterObj
