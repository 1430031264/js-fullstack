let Toast = {};
Toast.install = function (Vue,options) {
  let opt = {
    defaultType: 'center', //默认显示的位置
    duration: '1500',//继续的时间
  }
  //es6  let of Array 循环一个数组  let in 循环一个对象
  for (let property in options) {
    //使用options的配置，吧options里面的东西完整的拿出来给opt
    opt[property] = options[property]
  }
  Vue.prototype.$toast = (tips,type) => {
    if (type) {
      opt.defaultType = type
    }
    if(document.getElementsByClassName('vue-toast').length) {
      return //如果toast此时在页面是出现状态，则不再执行
    }
    let toastTpl = Vue.extend({
      template: '<div class="vue-toast toast-' + opt.defaultType +'">' + tips + '</div>'
    })
    let tpl = new toastTpl.$mount().$el //挂载到以后要去的dom结构上
    document.body.appendChild(tpl)
    setTimeout(() => {
      document.body.removeChild(tpl)
    },opt.duration)
  }
  ['bottom','center','top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips,type)
    }
  })
  
}

let Loading = {};
Loading.install = function (Vue) {
  let tpl
  Vue.prototype.$showLoading = () => {
    if (document.getElementsByClassName('vue-loading').length) {
      return
    }
    let loadingTpl = Vue.extend({//创建构造器，定义好提示信息的模版
      template:'<div class="vue-loading></div>'
    })
    tpl = new loadingTpl().$mount().$el
    document.body.appendChild(tpl)
  }
  Vue.prototype.$hideLoading = () => {
    if (document.getElementsByClassName('vue-loading').length) {
      document.body.removeChild(tpl)
    }
  }
}

export {
  Toast,
  Loading
}