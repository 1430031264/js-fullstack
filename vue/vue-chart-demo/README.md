- vuex 大型化 由modules 来支持 由modules来分仓  以后我们的数据就可以使用
  this.$store.user.~~  来找到相应的数据
- user
  state  info 登陆 注册 退出  登陆成功后用户会在服务器上种一个session 用户拿到的是cookie 
  actions 
  mutations
  vuex一定要先设计，搭好结构，核心是围绕着我们的状态，token（令牌环，更加高级的第三方授权登陆） this.$store.user.token 如果要去一个路由，但是这个值为null,我们就要让它跳转到登陆页面
- 登陆鉴权
  1. 延迟加载路由，不要一进去就加载全部的组件，每个组件要按需加载 使用component: () => import ('@/pages/index') 这样子写就不用import组件，就不用每次进来就加载所有组件