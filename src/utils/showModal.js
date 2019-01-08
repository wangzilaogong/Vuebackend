import Vue from 'vue'

import sureModal from 'Commons/confirm/sure'

const vue = new Vue()

const ModalList = {
  sureModal, // 二次验证
}

// showModal
/** 渲染二次弹窗
 * @param {vue对象} vueObj
 * @param {弹窗名字} name
 * @param {props 就是props} props
 * @param {弹窗的config} config
 */
const showModal = function (name, props = {}, config = {width: 350}) {
  if (vue) {
    let target = {
      render: h => {
        return h(ModalList[name], {
          props: props
        })
      }
    }
    Object.assign(target, config)
    vue.$Modal.confirm(target)
  } else {
    throw new Error('vueObj 不存在')
  }
}

// 渲染 普通Notice框
/**
 * showNotice
 * @param {提示类型} type
 * @param {提示内容} params {title:'aaa',desc:'sss'}
 */
const showNotice = function (type, params) {
  switch (type) {
    case 'info':
      vue.$Notice.info(params)
      break
    case 'success':
      vue.$Notice.success(params)
      break
    case 'warning':
      vue.$Notice.warning(params)
      break
    case 'error':
      vue.$Notice.error(params)
      break
  }
}
/**
 * Message 提示窗
 * @param {提示框类型} type
 * @param {config } params {content:'aaaa', closable:true , duration:true ,onClose:function(){} } or string
 */

const showMessage = function (type, params) {
  vue.$Message.config({
    top: 220,
    duration: 3
  })
  switch (type) {
    case 'info':
      vue.$Message.info(params)
      break
    case 'success':
      vue.$Message.success(params)
      break
    case 'warning':
      vue.$Message.warning(params)
      break
    case 'error':
      vue.$Message.error(params)
      break
    case 'loading':
      vue.$Message.loading(params)
      break
  }
}

export {
  showModal,
  showNotice,
  showMessage
}
