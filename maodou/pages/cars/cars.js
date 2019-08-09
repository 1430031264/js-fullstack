// pages/cars/cars.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",//搜索栏
    items: [],//渲染页面结
    _num: 0,//为选择器增加或者删除类名
    select:0,//显示/隐藏下拉菜单
  },
  // 搜索栏的点击事件
  showInput() {
    let that = this;
    that.setData({
      inputShowed: true
    });
  },
  hideInput() {
    let that = this;
    that.setData({
      inputVal: "",
      inputShowed: false
    }); 
  },
  clearInput() {
    let that = this;
    that.setData({
      inputVal: ""
    });
  },
  inputTyping(e) {
    let that = this;
    that.setData({
      inputVal: e.detail.value,
    });
  },
  /*为选择器添加点击方法 */
  chooseBar(e) {
    let that = this;
    let _num = that.data._num;
    let select = that.data.select;
    if (_num !== e.currentTarget.dataset.num) {
      that.setData({
        _num: e.currentTarget.dataset.num,
      })
    }else{
      that.setData({
        _num:0,
      })
    }
    /*显示/隐藏 下拉菜单 */
    if(select !== e.currentTarget.dataset.num){
      that.setData({
        select: e.currentTarget.dataset.num,
      })
    }else{
      that.setData({
        select: 0
      })
    }
  },
  // 滑动事件
  onPageScroll: function (e){
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5cda763a60ab5a410a268db5/maodou/maodou',
      success: function (res) {
        console.log(res)
        that.setData({
          items: res.data.data.carList
        })
       
      }
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