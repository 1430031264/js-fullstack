- npm 不只是包管理器 ，yarn 
  还是工作流里的重要法则，使用npm run scripts 

- webpack
  dundler 打包器
  传统的前端html CSS js 文件 使用live-server运行起来但是这只是半成品，
  现在讲究开发工艺，打包成一个bundler
  CSS要编译、压缩；
  js要是使用babel，es6-9 -> es5、压缩；
  html template
  这些东西打包起来，形成一个可以发布的产品，webpack能打包一切静态资源，

- 项目有多种环境
  一个项目有多份代码
  start dev development 开发环境   代码环境，一般在本地，启用的是localhost
  test 测试    一般在局域网内，启用的内网的IP地址
  build --mode production  被compressed 生产环境   线上环境，对应的是域名对应的服务器