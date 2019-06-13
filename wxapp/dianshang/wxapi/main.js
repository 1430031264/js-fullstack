// API 封装模块，wx.request 也请封装一下，不要每次都重复代码
//data {} json     method 有get|post|put|restful请求  通用的数据请求
//needSubDomain book.douban.com  movie.douban.com 子域名
const CONFIG = require('./config.js');
const API_BASE_URL = 'https://api.it120.cc';
const request = (url, needSubDomain, method, data) => {
  return new Promise((resolve, reject) => {
    const _url = API_BASE_URL + (needSubDomain?'/' + CONFIG.subDomain :'') + url;
    console.log(_url);
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        resolve(res.data);
      },
      fail: function(error) {
        reject(error)
      },
      complete(){}
    })
  });
}
    //向外输出模块
module.exports = {
  // {page: 1, category_id:1} 
  goods: (data) => { //商口列表
    // promise
    return request('/shop/goods/list',true,'post',data);
  },
  // 后台加了， 一个页面，好长，
  // 多个接口的
  banners: (data) => {
    return request('/banner/list', true, 'get', data);
  },
  noticeList:(data) => {
    //request 怎么传？ 问后端
    return request('/notice/list',true,'post',data);
  }
}