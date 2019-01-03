const state = {
  stepState: 0
}
const actions = {

}
const mutations = {
  addstepState (state) {
    state.stepState++
  },
  minstepState (state) {
    state.stepState--
  },
  setstepState (state, value) {
    state.stepState = value
  }
}
const getters = {
  getCurrentStep (state) {
    return state.stepState
  }
}
export default{
  state,
  getters,
  actions,
  mutations
}
