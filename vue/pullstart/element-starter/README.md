大前端全栈开发思路

在前端 vue 项目目录下，建一个server 用来做mvc就好了

- 前后端分离
  大前端？ 后端在前端的包裹这下，后端之负责/api，在server目录下其他东西由前端来负责
  前端在src目录下
  前端 /api
  后端就负责 api 服务

1. 后端在3000端口，未来等着ngnix（服务器代理）将80端口指向3000
  /api api 服务 等着前端调用  / 把vue打包好的dist目录 index.html readFile 返回
2. 前端一般在8080端口 负责 vue-router vuex axios
3. 前后端合作需求是   api数据 -> vue组件的 data
4. 跨域  前端面试的最重要的问题 
  domain 域名
  端口，cross domain 前端不允许，安全问题
  前端考虑，页面上显示的安全的内容
  后端考虑
- 前端
  book.douban.com
  www.douban.com
  subdomain:domain：port:都是一样的
  js同源机制，相同的源是值得信赖的
  前后端里面 8080:3000 跨域
  不跨，请求的地址 fetch('/api/user/login') 404
  3000 /api/  proxy 代理
  /api/ 匹配
  target:http://lacalhost:3000/api,
  changeOrigin: true,
  发出去的请求也不跨