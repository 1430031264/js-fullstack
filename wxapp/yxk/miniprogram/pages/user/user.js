// miniprogram/pages/user/user.js
const db = wx.cloud.database();//连上数据库
const userInfo = db.collection('userInfo');//找到userInfo表
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title:'数据加载中........，你慢慢等吧'
    });
    const _openid = options.id;
    userInfo.where({
      _openid: _openid
    })
    .get()
    .then(res =>{
      console.log(res.data)
      this.setData({
        userInfo:res.data[0]
      },res =>{
        wx.hideLoading();
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})