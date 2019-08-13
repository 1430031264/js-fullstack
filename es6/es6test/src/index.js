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
// let [a,b,c] = [0,1,2]
// // 可以给变量增加默认值
// let [foo = true] = []
// console.log(a)
// console.log(foo) // 输出 true

// let [q,w = 'lei了lei了'] = ["张三"]
// console.log(q + w)


///  =======对象的解构 ==========
// let { foo, bar} = { foo: '张三',bar: 'lei了lei了'}
// console.log(foo + bar)

// ============字符串的解构============
// const [a,b,c,d,e] = 'hello';


// ========= 对象扩展运算符==========
let arr1 = ['a','b','c']
// let arr2 = arr1 // 修改前
let arr2= [...arr1]
console.log(arr2)
arr2.push('d')
console.log(arr1)
// 这种情况下。当我们修改了arr2 的时候 arr1 也会跟着
// 改变，但是我们并不想arr1 改变，此时就呢个用到对象扩展运算符(...)


// =========== rest 运算符 （...）
function foo(first, ...args) {
  // console.log(args.length)
  for(let val of args) {
    console.log(val)
  }
}
foo(1,2,3,4,6,8,7,9)
// 运用 当我们知道了前面固定数量的字符串长度之后，后面的长度我们不知道，此时可以个使用rest 运算符