import api from '../../api'
import * as types from '../types' //* as 代表引用type.js里面的所有export出来的方法

const state = {
  showSidebar: false
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state,status) {
    state.showSidebar = status
  }
}

const actions = {
  setShowSidebar ({ commit },status) {
    commit(types.COM_SHOW_SIDE_BAR,status)
  }
}

const getters = {
  showSidebar: state => state.showSidebar
}

export default {
  state,
  mutations,
  actions,
  getters
}