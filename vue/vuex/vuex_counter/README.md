vue 开发 两部分
组件开发（协作） vuex数据管理（应用程序的数据流）

store 存储的商店（超市）  Vuex.Store({
  state
})

中央 组件 地方
读操作  this.$store.state.count 

写操作  actions,mutations,gettters,
vues不是什么时候都要，但是但我们做大项目的时候离不开vuex，
我们请上公司的概念
CEO 旅梦 {state}  100w
财务  mutations 唯一可以修改状态的地方
审核一下 对状态的修改是否是被允许的

- Vue 实现核心mvvm , 其他通过Vue.use() 插入进去
  this.$store
  this.$router
  读

  写？

- data() 将会被 state取代
  data只是自身状态的数据
  methods 改变状态的方法，会是actions