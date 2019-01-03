import Vue from 'vue'
import Vuex from 'vuex'

import Steps from './modules/steps'
import gtCheck from './modules/gtCheck'
import userInfo from './modules/userInfo'
import header from './modules/header'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    steps: Steps,
    gtCheck: gtCheck,
    userInfo: userInfo,
    header: header
  }
})

export default store
