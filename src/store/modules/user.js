export default {
  namespaced: true,
  state: {
    username: ''
  },
  mutations: {
    saveUserName(state, payload) {
      state.username = payload.username
    }
  },
  actions: {
    saveUserName(conText, payload) {
      conText.commit('saveUserName', payload)
    }
  }
}
