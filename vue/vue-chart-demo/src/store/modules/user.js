const user = {
  state:{
    token: null,// 令牌,一个状态,拿到token后 我们就能拿到用户的相对应的信息
    avatar: 'https://wpimg.wallstcn.com/3fce7247-d863-4e3d-a0de-d30aaef7358a',

  },
  mutations:{
    SET_TOKEN: (state,token) => {
      state,token = token;
    }
  },
  actions:{
    Login({ commit },token) {
      return new Promise((resolve,reject) => {
        commit('SET_TOKEN',token)
        resolve();
      })
    }
  }
}

export default user