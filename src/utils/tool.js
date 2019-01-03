import Vue from 'vue'
// highchart
import Highcharts from 'highcharts'
// lodash
import _ from 'lodash'
// 校验的方法
import Validator from './validator'
// 二次验证的验证的类型
import VerifyType from '../config/verifyType'

// 渲染弹窗
import * as RenderModal from '../utils/showModal'

Vue.prototype.$hcharts = function (elem, options) {
  const chartObj = Highcharts.chart(elem, options)
  Highcharts.setOptions({
    lang: {
      loading: '加载中',
      noData: '没有数据',
      weekdays: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
      shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }
  })
  return chartObj
}

Vue.prototype._ = _

Vue.prototype.$Validator = Validator

Vue.prototype.$VerifyType = VerifyType

Vue.prototype.$RenderModal = RenderModal
