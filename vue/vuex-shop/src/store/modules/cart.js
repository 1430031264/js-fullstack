// import shop from '../../api/shop'
const state = {
  items: []
}

const mutations = {
  pushProductToCart(state,{id}) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity(state, {id}) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++;
  }
}

const actions = {
  // 前后端分离 actions => api
  addProductToCart({ state, commit }, product) {
    if (product.inventory > 0) {
      // const 
      // - 把商品加进inventory 要什么逻辑？
      // 检查一个items里面有没有数据，有 + 1 ，没有就把这个商品 push 进去
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart',{ id: product.id})
      } else {
        commit('incrementItemQuantity',cartItem);
      }
    }
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
