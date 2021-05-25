export default {
  namespaced: true,
  state: {
    cartCount: -1
  },
  mutations: {
    saveCartCount(state, payload) {
      state.cartCount = payload.cartCount
    }
  },
  actions: {
    saveCartCount(conText, payload) {
      conText.commit('saveCartCount', payload)
    }
  }
}
