import Vue from 'vue';
import axios from 'axios';
const vue = new Vue();

//axios的配置
axios.defaults.timeout = 10000;
//这个地方一般放所有请求的接口的域名，设置了之后，方便以后的测试、线上等之类的，当域名更改了，只需要改这里的域名就能完美的跑起来项目
axios.defaults.baseURL = 'http://localhost:3000';

//返回状态判断
axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    vue.$toast('网络异常')
    vue.$hideLoading()
    return Promise.reject(res)
  }
  return res
}, (error) => {
  vue.$toast('网络异常')
  vue.$hideLoading()
  return Promise.reject(error)
});//获取axios返回的东西

//封装get请求  当我们要请求数据的时候，直接用这个函数，并给它传参就能执行axios.get()方法了
export function fetchGet(url,param) {
  return new Promise((resolve,reject) => {
    axios.get(url, {
      params: param
    })
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default {
  //用户登陆的
  Login(params) {
    return fetchGet('/login',params)
  },
  //banners
  BannerList () {
    return fetchGet('/banner')
  },
  //歌单
  DiscLists (params) {
    return fetchGet('/top/playlist',params)
  },
  //歌单详情
  SongList (params) {
    return fetchGet('/playlist/detail',params)
  },
  //歌曲搜索
  MusicSearch (params) {
    return fetchGet('/search',params)
  },
  //热门搜索
  HotSearchKey () {
    return fetchGet('/search/hot')
  }
}