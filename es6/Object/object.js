// let name ='张三'
// let skill = 'web'
// // es5 对象赋值
// // let obj = {name: name, skill: skill}
// // es6 
// let obj = {name, skill}
// console.log(obj)

// -------------key值的构建 不知道key值的时候，可以使用key值的构建----------------
// let key = 'skill'
// var obj = {
//   [key]: 'web'
// }
// console.log(obj)

// ------------自定义对象方法----------
// let obj = {
//   add: function (a,b) {
//     return a + b
//   }
// }
// console.log(obj.add(1,2))

// ---------   is()   ----------------
// let obj1 = {name: '张三'}
// let obj2 = {name: '张三'}
// console.log(obj1 === obj2)
// console.log(NaN === NaN) // false
// console.log(Object.is(obj1.name,obj2.name))
// console.log(Object.is(NaN,NaN)) // ture
// 区别： === 为同值相等  is() 严格相等


// ----------  assign 合并对象 -------------------
// let a = {a: '张三'}
// let b = {b: '李四'}
// let c = {c: '王五'}
// let d = Object.assign(a,b,c)
// console.log(d)


