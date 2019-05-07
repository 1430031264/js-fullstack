// miniprogram/pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    //因为我们这个页面要实时刷新，只要有页面渲染的时候都会刷新,所以写在这个监听里面
    let self = this;
    wx.showNavigationBarLoading();//每次进来都刷新一下数据
    wx.cloud.callFunction({
      name: 'getGroup',
      data: {},
      success(res) {
        self.setData({
          groupList:res.result
        })
      },
      fail(error){
        console.log(error);
      },
      complete(){
        wx.hideNavigationBarLoading();
      }
    })
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