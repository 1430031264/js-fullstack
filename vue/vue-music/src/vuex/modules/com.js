import api from '../../api'
import * as types from '../types' //* as 代表引用type.js里面的所有export出来的方法

const state = {
  showSidebar: false,
  fullScreen: false
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state,status) {
    state.showSidebar = status
  },
  [types.SET_FULL_SCREEN] (state,status) {
    state.fullScreen = status
  }
}

const actions = {
  setShowSidebar ({ commit },status) {
    commit(types.COM_SHOW_SIDE_BAR,status)
  },
  selectPlayingSong ({ commit },status) {
    // let playlist = state.playlist.slice()
    commit(types.SET_FULL_SCREEN,status)
  },
  // backPlayingSong({ commit }) {
  //   commit(types.SET_FULL_SCREEN,false)
  // }
}

const getters = {
  showSidebar: state => state.showSidebar,
  fullScreen: state => state.fullScreen
}

export default {
  state,
  mutations,
  actions,
  getters
}