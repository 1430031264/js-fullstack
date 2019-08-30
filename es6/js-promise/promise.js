// promise 解决的是es5中 回调地狱的问题

let state = 1

function step1(resolve,reject) {
  console.log('1. 开始做饭、洗菜')
  if(state == 1) {
    resolve('结果：洗菜做饭完成')
  }
  reject('结果：洗菜做饭失败')
}

function step2(resolve,reject) {
  console.log('2. 坐下来吃饭')
  if(state == 1) {
    resolve('结果: 坐下来吃饭完成')
  }
  reject('结果: 坐下来吃饭失败')
}

function step3(resolve,reject) {
  console.log('3. 收拾桌子、洗碗')
  if(state == 1) {
    resolve('结果：收拾桌子洗碗完成')
  }
  reject('结果：收拾桌子洗碗失败')
}

new Promise(step1)
  .then(
    function(val){
      console.log(val)
      return new Promise(step2)
    }
  )
  .then(
    function(val){
      console.log(val)
      return new Promise(step3)
    }
  )
  .then(
    function(val){
      console.log(val)
    }
  )