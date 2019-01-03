import Vue from 'vue'
import timeCount from './timeCount'
import throttle from './throttle'
Vue.directive('timecount', timeCount)
Vue.directive('throttle', throttle)
