import {CONSOLE_REQUEST_ENABLE, CONSOLE_RESPONSE_ENABLE} from './index.js'

import Vue from 'vue'
import router from '../router'
const axios = require('axios')
const vue = new Vue()
const TOKENLENGTH = localStorage.getItem('token') === null ? -1 : localStorage.getItem('token').length

// 请求成功
const requestSuccessFunc = function (requestObj) {
  CONSOLE_REQUEST_ENABLE && console.info(`requestInterceptorFunc,url:%c${requestObj.url}`, 'color:white;background-color:orange;padding:2px;border-radius:2px', requestObj)
  // 自定义拦截请求，处理逻辑，发送监控
  // 在请求发出之前进行一些操作
  if (!axios.defaults.headers['Authorization']) {
    console.log('没有toekn')
    axios.defaults.headers['Authorization'] = TOKENLENGTH > 0 ? `Bearer ${localStorage.getItem('token')}` : ''
  }
  return requestObj
}

// 请求失败
const requestFailedFunc = function (requestError) {
  // todo
  return Promise.reject(requestError)
}

// 响应成功
const responseSuccessFunc = function (responseObj) {
  // 需要处理权限，路由重定位，弹出报错等
  CONSOLE_RESPONSE_ENABLE && console.log(`responseSuccessFunc,url:%c${responseObj.status}`, 'color:white;background-color:orange;padding:2px;border-radius:2px', responseObj)
  return responseObj
}

// 响应失败
const responseFailedFunc = function (responseError) {
  CONSOLE_RESPONSE_ENABLE && console.info('responseFailedFunc%cObject', 'color:white;background-color:purple;padding:2px;border-radius:2px', responseError)
  let code = responseError.response.status
  let url = responseError.response.config.url
  let tip = responseError.response.data.message || responseError.response.data.error
  const whiteList = []
  switch (code) {
    case 400:
      if (whiteList.includes(url)) {
        vue.$RenderModal.showMessage('error', {content: tip})
        // 这边是抛出去下放到业务层 ？ 还是订阅得了todo
        // return Promise.reject(responseError.response || '服务异常')
      } else {
        vue.$RenderModal.showNotice('error', {title: tip})
      }
      break
    case 403:
      router.push({name: 'Login'})
      break
    case 404:
      vue.$RenderModal.showNotice('error', {title: '404'})
      break
    case 500:
      vue.$RenderModal.showNotice('error', {title: '服务异常'})
      break
    case 504:
      vue.$RenderModal.showNotice('error', {title: '504'})
      break
    default:
      return Promise.reject(responseError.response || '服务异常')
  }
}
export {
  requestSuccessFunc,
  responseSuccessFunc,
  requestFailedFunc,
  responseFailedFunc
}
