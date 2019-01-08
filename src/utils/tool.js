import Vue from 'vue'
// lodash
import _ from 'lodash'
// 校验的方法
import Validator from './validator'
// 二次验证的验证的类型
import VerifyType from '../config/verifyType'

// 渲染弹窗
import * as RenderModal from '../utils/showModal'

Vue.prototype._ = _

Vue.prototype.$Validator = Validator

Vue.prototype.$VerifyType = VerifyType

Vue.prototype.$RenderModal = RenderModal
