const state = {
  headerState: false, // header的颜色控制
  showBtn: true // 登录注册按钮是否显示
}
const actions = {

}
const mutations = {
  setHeaderState (state, value) {
    state.headerState = value
  },
  setBtnState (state, value) {
    state.showBtn = value
  }
}
const getters = {
  getCurrentHeader (state) {
    return state.headerState
  },
  getCurrentBtn (state) {
    return state.showBtn
  }
}
export default{
  state,
  getters,
  actions,
  mutations
}
