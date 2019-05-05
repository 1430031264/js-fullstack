const db = wx.cloud.database();//连上数据库
const userInfo = db.collection('userInfo');//找到userInfo表
Page({
  data: {
    userList: []
  },
  getUserInfo: function (result) {
    console.log(result);
    // 用户_openid前端是拿不到的，但是云开发能拿到
    wx
      .cloud
      .callFunction({
        name: 'getOpenid',
        complete: res => {
          // console.log(res.result.openId)
          //云数据库中添加一条记录，只要给他传一个JSON 代表一个记录
          // .count  数量    要的不是结果，而是符合条件的数量
          userInfo.where({
            _openid: res.result.openId
          }).count().then(res => {
            if (res.total == 0) {
              userInfo.add({
                data: result.detail.userInfo
              })
                .then(res => {
                  console.log(res);
                })
            } else {
              // console.log("你已经添加过了")
              wx.navigateTo({
                url:'/pages/add/add',
                success:function(res){
                  //success
                }
              })
            }
          })
          console.log(result.detail.userInfo)

        }
      })
  },
  onLoad: function(options){
    userInfo
      .get()
      .then( res => {
        this.setData({
          userList: res.data
        })
      })
  }
})