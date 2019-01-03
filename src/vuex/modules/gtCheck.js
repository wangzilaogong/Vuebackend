// 极验状态 [] / false
const state = {
  gtResult: false
}

const mutations = {
  CHANGEGTCHECK (state, result) {
    state.gtResult = result
  }
}
const actions = {
  changeGtCheck ({commit}, result) {
    commit('CHANGEGTCHECK', result)
  }
}
const getters = {
  getCurrentGtResult: (state) => {
    return state.gtResult
  }
}
export default{
  state,
  getters,
  actions,
  mutations
}
