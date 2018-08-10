import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user_info: {}
  },
  // 更新状态
  mutations: {
    // 更新用户信息
    UPDATEUSERINFO (state, info) {
      state.user_info = info
      console.info(info, 'Mutations')
    }
  },
  // 获取状态
  getters: {
    // 获取用户信息
    getUserInfo (state) {
      return state.user_info
    }
  }
})

export default store
