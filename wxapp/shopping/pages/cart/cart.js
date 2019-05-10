// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false,
    carts:[],
    selectAllStatus:true,
    totalPrice:0
  },
  //计算商品的总价格
  getTotalPrice(){
    let carts = this.data.carts;
    let total = 0;
    for(let i =0; i < carts.length; i++){
      if(carts[i].selected){
        total += carts[i].num * carts[i].price
      }
    }
    this.setData({
      totalPrice: total.toFixed(2)
    })
  },
  //购物车商品减少
  minusCount(e){
    // console.log(e)
    const index = e.target.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if(num <= 1){
      return
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },
  //购物车商品增加
  addCount(e){
    const index = e.target.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },
  //删除购物车里面其中一个商品
  deleteList(e){
    console.log(e)
    const index = e.target.dataset.index;
    let carts = this.data.carts;
    carts.splice(index,1)
    this.setData({
      carts:carts
    })
    if(!carts.length){
      this.setData({
        hasList: false
      })
    }else{
      this.getTotalPrice();
    }
  },
  //全选按钮
  selectAll(e){
    // let totalPrice = this.data.carts.price
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    let carts = this.data.carts
    for(let i = 0;i< carts.length;i++){
      carts[i].selected = selectAllStatus
    }
    this.setData({
      selectAllStatus:selectAllStatus,
      carts:carts
    })
    this.getTotalPrice();
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
    setTimeout(() => {
      this.setData({
        hasList:true,
        carts:[
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true },
          { id: 2, title: '素米 2500g', image: '/image/s6.png', num: 2, price: 15.0, selected: true },
          { id: 2, title: '新鲜芹菜 5000g', image: '/image/s5.png', num: 6, price: 8.0, selected: true },
          { id: 2, title: '素米 1000g', image: '/image/s6.png', num: 3, price: 5.0, selected: true },
        ],
        
      });
      this.getTotalPrice();
    },1000)
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