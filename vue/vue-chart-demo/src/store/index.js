import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

//仓库  我们要分类放东西，仓库的每个地方放什么类别的东西
const store = new Vuex.Store({
  getters,
  modules: {
    user
  }
})
export default store