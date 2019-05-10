// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[
      { name: '果味', id: 'guowei' },
      { name: '蔬菜', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '粗茶', id: 'cucha' },
      { name: '淡饭', id: 'danfan' }
    ],
    curIndex:0,
    isScroll:false,
    toView:'guowei'
  },
  switchTab(e){
    console.log(e)
    
    this.setData({
      toView : e.target.dataset.id,//点击跳转页面
      curIndex : e.target.dataset.index//让样式跟着页面动，当到达相应的页面，赋予对应的元素on类名
    })
  },
  touch(a){
    console.log(a)
    let nowPage = a.target.id;
    // this.setData({
      
    // })
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
    let self = this
    wx.request({
      url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
      success(res){
        // console.log(res)
        self.setData({
          detail: res.data
        })
      }
    })
  },

})