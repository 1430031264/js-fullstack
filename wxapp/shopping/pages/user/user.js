// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thumb:'',
    nickname: '',
    orders:[],
    hasaddress:false,
    address:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    //获取用户基本信息
    wx.getUserInfo({
      
      success: (result) => {
        self.setData({
          thumb: result.userInfo.avatarUrl,
          nickname:result.userInfo.nickName
          
        })
      },
      fail: () => {},
      complete: () => {}
    });
    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/orders.txt',
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        self.setData({
          orders: result.data
        })
      },
      fail: () => {},
      complete: () => {}
    });
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */

   //让地址信息显示出来
  onShow: function () {
    let self = this;
    wx.getStorage({
      key: 'address',
      success: (result) => {
        self.setData({
          hasAddress: true,
          address: result.data
        })
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
  //付款
  // payOrders(){
  //   wx.requestPayment({
  //     timeStamp: '',
  //     nonceStr: '',
  //     package: '',
  //     signType: '',
  //     paySign: '',
  //     success: (result) => {
        
  //     },
  //     fail: () => {},
  //     complete: () => {}
  //   });
      
  // },
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