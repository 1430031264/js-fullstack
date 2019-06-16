import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//CEO
const state = {
  count: 0
}
//组件里面的computed
const getters = {
  eventOrOdd: state => state.count % 2 === 0 ? 'even':'odd'
}
//改变  这有它能唯一修改状态 
//财务
const mutations = {
  increment (state) {
    state.count++; 
  },
  decrement (state) {
    state.count--;
  },
}

//动作 部门 actions 不能直接修改状态，需要commit 不能修改state
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  //actions 里面不能修改state，只可以读
  incrementIfOdd ({ commit,state }) {
    if (( state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync (commit) {
    // actions axios 异步获取数据......
    return new Promise ((resolve,reject) => {
      setTimeout(() => {
      commit('increment');
      resolve();
    },1000)
    })   
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})