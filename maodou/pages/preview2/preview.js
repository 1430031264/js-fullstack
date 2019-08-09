// pages/preview2/preview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    advImage: [
      {url:'https://image1.guazistatic.com/qn190603213008b7624da40a9a94dc2304233a7129bc6e.png?imageView2/2/w/750/h/328/q/99'},
      {url:'https://image1.guazistatic.com/qn1903261846574f25410fedf960d17aca0b8927f26d1a.png?imageView2/2/w/750/h/375/q/88'},
      {url:'https://image1.guazistatic.com/qn190512210552e6189d4abd3f52c8d0b1c5a0673b9442.png?imageView2/2/w/750/h/375/q/88'}
    ],
    currentSwiper: 0,
    indicatorColor:'white',
    indicatorActivecolor:'red'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      advimg: this.data.advImage,
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
  swiperChange: function(e) {
    this.setData({
      currentSwiper: e.detail.current
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