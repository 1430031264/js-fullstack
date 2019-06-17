- 快速开发
  选择合适的starter 
  .git 删除，
- 全家桶
  vue负责mvvm + vue-router + vuex + axios
- 先配vue-router,路由接管一切
  ./router/index.js index.js 会补齐
- pages 
  所有路由级别组件，都叫页面组件，
  alias 一下
- less less-loader
  scoped 作用域 加了之后,样式只属于本组件，不会影响别的组件
- 更酷
  transition的理解以及发生的过程
  v-enter(短) -> v-enter-active(整个的transition时间) -> v-leave(短) -> v-leave-active(opacity:0,整个的transition时间)