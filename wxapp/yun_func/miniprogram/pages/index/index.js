
Page({
  http: function(){
    //小程序是下载在手机本机端的，但是手机容量不够了？可以上传到百度云，如何让小程序一下到云端？
    // 从本地到云端 
    wx.cloud.callFunction({
      name:'http'
    })
    .then(res => {
      console.log(res);
    })
  }
})