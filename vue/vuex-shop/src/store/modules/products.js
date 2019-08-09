import shop from '../../api/shop'
const state = {
  all: []
}

const mutations = {
  setProducts (state, products) {
    state.all = products
  }
}

const actions = {
  // 前后端分离 actions => api
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

const getters = {

}

export default {
  namespaced: true, // 命名空间
  state,
  getters,
  actions,
  mutations
}
