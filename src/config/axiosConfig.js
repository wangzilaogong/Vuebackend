import {CONSOLE_REQUEST_ENABLE, CONSOLE_RESPONSE_ENABLE} from './index.js'

// 请求成功
const requestSuccessFunc = function (requestObj) {
  CONSOLE_REQUEST_ENABLE && console.info('requestInterceptorFunc', `url:${requestObj.url}`, requestObj)
  // 自定义拦截请求，处理逻辑，发送监控
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
  CONSOLE_RESPONSE_ENABLE && console.info('responseSuccessFunc', `url:${responseObj.url}`, responseObj)
  let resData = responseObj.data
  let {code} = resData
  switch (code) {
    case 200:
      return resData.data
    case 1111:
      return
    default:
      return Promise.reject(resData)
  }
}

// 响应失败
const responseFailedFunc = function (responseError) {
  return Promise.reject(responseError)
}
export {
  requestSuccessFunc,
  responseSuccessFunc,
  requestFailedFunc,
  responseFailedFunc
}
