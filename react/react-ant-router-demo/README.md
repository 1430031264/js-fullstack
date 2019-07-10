## react-router
  静态路由 vue-router 一样的配置 []
  动态路由 
  react 一切皆组件 4.0 之后，组件化的思维，路由也是一个组件

## vs
  hashRouter #  通过 hashChange 实现
  historyRouter 不带#  BrowserRouter 实现方式是通过后 h5 的 History api来实现的
  刷新这个行为

  /#a -> /#b 由js控制跳转  刷新后是 /#b 没问题
  /a -> /b  也是由js控制  但是刷新后相当与会请求后端的 /b 后端肯定没有这个/b的路由 后端再次交给前端处理
  1. nginx
  2. 后端的代码 