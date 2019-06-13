import Vue from 'vue'
// lodash
import _ from 'lodash'
// 校验的方法
import Validator from './validator'

Vue.prototype._ = _

Vue.prototype.$Validator = Validator
