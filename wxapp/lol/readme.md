- 小程序是个伟大的产品
  android/ios 两套代码
  小程序使用前端开发思路和技术，基于微信大APP，实现我们的APP开发

  1. 一份代码，到处运行
  2. 前端开发，快快快
  3. 基于微信，性能良好

  1. wxml == html
    新的标签组件  view =div
    wxss == css
    js
    page = wxml + wxss + js
    App = duoge page
    这就是小程序的架构
  2. 三者周转的很 6666 呦
    写结构
    写样式 rpx
    js 约定 事件函只要加在Page({
      ,
      bind.....:function(){

      }
    })
    bindtap="bind......"    //binktap = onclick