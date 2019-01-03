import {requestSuccessFunc, responseSuccessFunc, requestFailedFunc, responseFailedFunc} from 'Config/axiosConfig'
const axios = require('axios')
require('babel-plugin-transform-node-env-inline')

axios.defaults.baseURL = `${process.env.API_HOST}`
axios.defaults.timeout = 100000 // 超时时间
axios.defaults.withCredentials = true // 允许跨域携带cookie
const TOKENLENGTH = localStorage.getItem('token') === null ? -1 : localStorage.getItem('token').length
axios.defaults.headers = {
  'Authorization': TOKENLENGTH > 0 ? `Bearer ${localStorage.getItem('token')}` : '',
  'Content-Type': 'application/json'
}

// axios请求拦截器
axios.interceptors.request.use(requestSuccessFunc, requestFailedFunc)

// axios响应拦截器
axios.interceptors.response.use(responseSuccessFunc, responseFailedFunc)

// ****文件上下传***
// 文件上传
const fileUpload = (data) => axios({ method: 'post', url: '/file/upload', data: data })
// 文件获取
const getFile = (data) => axios({ method: 'get', url: `/file/${data.key}` })

export {
  axios,
  fileUpload, getFile
}
