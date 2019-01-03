// 用户信息状态
import {acountInfo} from 'Api/api'
const state = {
  userInfo: {}
}

const mutations = {
  USERINFO (state, result) {
    state.userInfo = result
  }
}
const actions = {
  async assignUserInfo ({commit}) { // 赋值操作
    try {
      const res = await acountInfo()
      const {data} = res
      // console.log(data, '来自userinfo')
      if (res.status === 200) {
        commit('USERINFO', data)
      }
    } catch (error) {

    }
  }
}
const getters = {
  getUserInfo: (state) => {
    // console.log(state.userInfo, '来自userinfo.js 的getter')
    return state.userInfo
  }
}
export default{
  state,
  getters,
  actions,
  mutations
}
