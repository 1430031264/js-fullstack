// proxy 代理 es6 增强对象和函数，预处理

// let obj = {
//   add: function (val) {
//     return val + 100
//   },
//   name: '张三'
// }

// console.log(obj.add(100))

// ------------------------------------------------

// let pro = new Proxy(
//   {
//     add: function (val) {
//       return val + 100
//     },
//     name: '张三'
//   },{
//     get: function(target,key,property) {
//       console.log('lei了lei了')
//       return target[key]
//     },
//     set: function (target,key,value,receiver) {
//       console.log(`seeting ${key} = ${value}`)
//     }
//   }
// )
// //  get
// // console.log(pro.name) // lei了lei了\n  张三

// //  set
// pro.name = '张三和李四'
// console.log(pro.name) // seting name = 张三和李四 \n lei了lei了 \n 张三

// -------------------------------------------------------
let target = function() {
  return '张三'
}
let handle = {
  apply(target,ctx,args) {
    console.log('do apply')
    return Reflect.apply(...arguments)
  }
}