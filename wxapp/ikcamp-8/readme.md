## h5 小程序
  - 更好的体验
  - 更强大的能力

##　设计一个项目
  1. 配置
    - 写死的常量
  2. 多处公用的方法
    - 防抖 util
  3. 环境的区分
    - 开发环境
      - 错误提示，日志打印，更好的开发体验
    - 测试环境 
    - 线上
  4. CSS 划分
    - 私有样式
      - page 里面每一个文件夹里都有一个
    - 公有样式
      - reset.css 重置样式
      - base.css 公用样式
  5. 请求封装
    1. header: {
      contend-type: 
      x-abc
    } // 封装请求头 使得每个页面都能直接引入进去来使用，请求字段统一处理
    wx.request({contend-type}) 如果不封装，每个页面都要写着一个wx.request
    2. 请求结果统一处理

## 两个page 之间传递数据
  可以将数据放入app.js里面的 globalData
  存入storage 里面
  通过页面 url     /detail/index?id=xxx
  
  订阅发布者模式:
    A: 触发一个事件
    B: 监听一个事件



  