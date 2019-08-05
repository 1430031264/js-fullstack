基于 vue 2.0 + vuex + vue-router 全家桶实现方案，来模拟网易云音乐webapp项目 CSS预编译工具用的是Sass，音乐滚动加载用的是betterscore，全面采用的 es6 风格

解决了哪些问题
- 图片懒加载  vue-lazyload
- 前后端分离
  使用node.js NeteaseCloudMusicAPI proxy
  8080 + 3000
- fastclick  
- 设计了 store
  songs index song singer mode favoriteList searchHistory playHistory
- iconfont
- eslint

- 上班， vue项目，分析清除目录结构
  1. components/  根路由挂钩 工作的入口
  2. store/ 全局共享 分模块 了解关键状态
  3. common/ 公共组件不用写
  4. api/ 前后端的协作方式