const a = {
  b: 1
}
function b() {
  console.log('a的值发生改变',a.b)
}

function bindData() {
  // Object.keys() 会返回一个由一个给定对象的自身可枚举属性的数组
  Object.keys(a).map(key => {
    let v = a[key]
    // defineProperties直接在一个对象上新增属性或者修改原有属性，并返回最新的对象
    Object.defineProperty(a, key, {
      get() {
        // 读取属性时调用的方法
        console.log('正在读取a 里面的值')
        return v
      },
      set(newA) {
        // 写入属性时调用的方法
        v = newA
        b()
      }
    })
  })
}

bindData()
a.b = 36681