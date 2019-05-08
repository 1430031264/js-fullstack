今晚我们分享的是备受欢迎的gitgub小程序

- 一套好的ui 
  app.wxss 先把全局的做法给实现了（全局皮肤）

- 组件思想
  界面中先对独立的显示区块，停下来封装组件，区块类似于session的概念
  意义：界面由组件构成，不是由标签构成，组件可以复用

- 项目之中所有的请求都封装到API下

- module.exports = {}  
  require 

- wx.startPullDownRefresh()  onLoad 把生命周期交给onPullDownRefresh()
  api 请求
  wx.stopPullDownRefresh
  这是一个一进来就刷新页面的固定模式

- 复杂项目的组件数量会比较多
  /style/base.wxss 它封装的是多个组件都依赖的基础样式 

- 