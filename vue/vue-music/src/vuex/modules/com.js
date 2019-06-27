import api from '../../api'
import * as types from '../types' //* as 代表引用type.js里面的所有export出来的方法

const state = {
  showSidebar: false,
  fullScreen: false,
  searchHistory: [123]
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state,status) {
    state.showSidebar = status
  },
  [types.SET_FULL_SCREEN] (state,status) {
    state.fullScreen = status
  },
  [types.COM_SAVE_SEARCH_HISTORY] (state) {
    state.searchHistory = state
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
  saveSearchHistory ({ commit,status },query) {
    let searchHistory = [query, ...state.searchHistory.slice()]
    searchHistory = [...new Set(searchHistory)]
    commit (types.COM_SAVE_SEARCH_HISTORY,searchHistory)
  }
}

const getters = {
  showSidebar: state => state.showSidebar,
  fullScreen: state => state.fullScreen,
  searchHistory: state => state.searchHistory
}

export default {
  state,
  mutations,
  actions,
  getters
}