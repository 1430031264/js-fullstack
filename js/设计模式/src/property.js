// const _ = require('lodash')
function debounce(fn, wait) {
  let timeout,result;
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      result = fn()
    },wait)
    return result
  }
}
function decDebounce(wait) {
  return function(target,name,descriptor) {
    // console.log(target,name,descriptor)
    const originalMethod = descriptor.initializer && descriptor.initializer.call(this)
    return {
      enumerable: true,
      configurable: true,
      // writable: true,
      get: function () {
        // 劫持 get 
        return debounce(originalMethod, wait)
      }
    }
  }
}

class Btn {
  @decDebounce(2000)
  handleBuy = () => {
    console.log('向后端发送购买请求')
  }
  bindEvent() {
    document.getElementById('btn').addEventListener('click',this.handleBuy)
  }
}

let b = new Btn() 
b.bindEvent()