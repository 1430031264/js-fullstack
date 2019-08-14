//index.js
//获取应用实例
import util from '../../utils/index'
const app = getApp()
let page = 0
Page({
  data: {
    // page: 1, // 第几页
    articleList: [], // 文章列表
  },
  onLoad: function () {
    this.requestArticle();
  },
  requestArticle(){
    page ++;
    util.request({
      mock:true,
      url:'list',
      page,
      pageSize: 4
    }).then(res => {
      //正常的数据
      let articleList = res.data.data;
      // console.log(articleList);
      // 本地缓存
      // 把标记过的属性拿过来  拿到所有文章 判断一下
      // 加上 hasVisited 属性
      articleList = this.formatArticle(articleList)
      
      let oldArticleList = this.data.articleList;
      let newArticleList = oldArticleList.concat(articleList)

      this.setData({
        articleList: newArticleList
      })
      
    }).catch(()=>{
      //错误
    })
  },
  formatArticle(articleList) {
    let visitedID = wx.getStorageSync('visitedID') || [];
    
    // 根据一份数据来返回一份数据 多用map
    articleList = articleList.map(group => {
      group.articles = group.articles.map(item => {
        if (visitedID.includes(item.contentId)) {
          item.hasVisited = true
        }
        return item
      })
      return group;
    })
    return articleList
  },
  showDetail(e) {
    // contentId
    // 标记为已经阅读过的
    console.log(e)
    let contentId = e.currentTarget.dataset.id
    // console.log(contentId)
    let visitedID = wx.getStorageSync('visitedID') || []
    
    if(!visitedID.includes(contentId)) {
      visitedID.push(contentId);
    }
    wx.setStorageSync("visitedID", visitedID);
    wx.navigateTo({
      url: `../detail/detail?contentId=${contentId}`
    });
      
    // 设置本地缓存
    // 去到详情页面
  },
  getReachBottom() {
    this.requestArticle()
  },
  onShow() {
    this.onLoad()
  }
})
