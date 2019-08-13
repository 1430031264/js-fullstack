// var a = "张三";
// console.log(a)
// window.onload = function() {
//   console.log(a + 'lei了lei了')
// }

// {
//   let a = "李四"
// }
// console.log(a)

// --------------- 变量的声明方式 -----------

// for(var i =0; i < 10; i++) {
//   console.log('forv循环体中：' + i)
// }
// console.log('forv循环体外' + i) 
// 循环体中使用var 声明变量，会污染全局变量

// for(let i =0; i < 10; i++) {
//   console.log('forl循环体中：' + i)
// }
// console.log('forl循环体外' + i)

// --------------- 解构赋值 -----------

// ==========数组解构 ==============
let [a,b,c] = [0,1,2]
// 可以给变量增加默认值
let [foo = true] = []
console.log(a)
console.log(foo) // 输出 true

let [q,w = 'lei了lei了'] = ["张三"]
console.log(q + w)