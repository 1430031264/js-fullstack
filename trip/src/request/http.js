import axios from 'axios'
import { Toast } from 'mand-mobile'
import { stringify } from 'qs'
import store from '../store/index'

let tmpTrip = store.state.trip

axios.defaults.timeout = 10000
// 跨域请求时需要使用凭证
axios.defaults.withCredentials = false

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断一下vuex中是否存在token
    // 如果存在 则统一在 http 请求的 header 上面都加上 token ，这样后台能根据 token 判断用户当前是否是登陆状态
    // 即使本地存在 token 也有可能 token 是过期的，所以在拦截器中返回状态判断
    // const token = store.state.token  
    // token &&　(config.header.Authorization = token)
    config.header['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
  },
  error => {
    Toast.failed('请求过程出错了，拜了个拜')
    return Promise.error(error)
  }
)

//响应拦截
axios.interceptors.response.use(function (response) {
  //对相应数据进行操作
  return response
}, function (error) {
  Toast.failed('相应过程出错了~~~~')
  return Promise.reject(error)
})

var request = (options) => {
  // 每次请求传入当前用户的ID 
  if (tmpTrip.user) {
    if (options.body) {
      options.body.user.id = tmpTrip.user.userId
    }
    if (options.params) {
      options.params.userId = tmpTrip.user.userId
    }
  }
  // 表单传值参数格式化 
  return axios.request({
    url: `http://localhost:3000${options.url}`,
    method: options.body,// get 请求传给后端的参数
    params: options.params
  }).then(response => {
    return response
  },err => {
    Toast.failed(err.message)
    throw err
  }).catch((error) => {
    Toast.failed('请求压根就没成功')
    throw error
  })
}

// 封装 http 请求方式
export const http = {}
const methods = ['get','post','put','delete']
methods.forEach(method => {
  http[method] = (url,params = {}) => {
    if (method === 'get') {
      return request({ url, params, method })
    }
    return request({ url, body:stringify(params), method })
  }
})

export default function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  // defineProperties() 可以直接在一个对象上新增属性或者修改原有属性，并可以返回一个最新的对象
  //  因为在这里它挂载到了vue原型链上，就不用在main.js里面吧$http挂载到原型链上了
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        const obj = {
          get: http['get'],
          post: http['post'],
          put: http['put'],
          delete: http['delete'],
        }
        return obj
      }
    }
  })
}