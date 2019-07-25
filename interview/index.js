//// 第一题

function Person(name) {
  this.name = name
}

let p = new Person('wn')

// 1. p.__proto__ === Person.prototype
// 2. Person.__proto__ == Function.prototype
// 3. 实例的隐式原型链（__proto__） 等于其构造函数的显示原型链（prototype）

var foo = {},
    F = function(){};

Object.prototype.a = 'valA'
Function.prototype.b = 'valB'

console.log(foo.a) // 输出 valA
console.log(foo.b) // 输出 undefined 继承是顺势继承，父亲有的属性，儿子能继承，但是一般情况下爷爷不会有，即爷爷无法继承
console.log(F.a) //输出 valA

//// 第二题

//构造函数是不需要返回值的，使用 new 来创建对象时，如果 return 是非对象类型，会忽略返回值，如果返回的一个对象，就会返回对象里面的值
//若 return null 一会忽略返回值
function Person1(name) {
  this.name = name
  return { }
}
let p1 = new Person1('wn')
console.log(p1)

////
function Student() {

}
Student.prototype = Person.prototype
Student.prototype.constructor = Student

let s = new Student('wn') // 打印这个 s 是没有东西  无法继承Person的属性，但是能拥有特性
let w = new Person('wn') // 打印出 wn
console.log(s instanceof Person)
console.log(s)


//// 第三题

// ---let 每次循环会生成一个封闭的作用域和setTimeout,而 var 每次循环会覆盖掉上次的作用域
for (var i = 0; i < 10; i++) {
  setTimeout(() =>{
    console.log('var',i)
  },0)
} //输出 10 个 10
for (let j = 0; j < 10; j++) {
  setTimeout(() =>{
    console.log('let',j)
  },0)
} //输出 0-9

// 如果一定要使用var 不用let 怎么让结果能输出 0-9？  使用闭包

for (var a = 0; a < 10; a++) {
  (function(a) {
    setTimeout(() =>{
      console.log('闭包',a)
    },0)
  })(a)
}

//// 第四题 for in 和for of的区别

Array.prototype.method = function() {
  console.log('wn')
}
var myArr = [1,2,3,4,5,6,7]
for (let index of myArr) {
  console.log('for-of',index)
}
for (let i in myArr) {
  console.log('for-in',myArr[i])
}
// 通常 for in 遍历对象  for of 遍历数组

// 如果 for in 遍历数组 let的变量是对应元素索引的字符串型数字,遍历该数组上所有可以枚举的属性
// for of let的变量是元素的值

// 使用 for in 遍历数组会出现的问题
// 1. index 索引为字符串形型的数字，不能进行几何运算
// 2. 遍历顺序有可能不是按照实际数组的内部顺序进行的
// 3. 使用 for in 会遍历数组所有可以枚举属性，包括原型链，所以for in 更适合遍历对象

// for of 
// for in 遍历的是数组的索引 for of 遍历的是数组的元素
// for of 遍历的只是数组内的元素，不包括数组的原型属性和索引


//// 第五题

let gArr= [100,90,[80,70],60,[50,40,[30,20]]] // 给出
let oArr = [100,90,80,70,60,50,40,30,20] // 希望得到

//递归
function outputArr(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(outputArr(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
//reduce
function outputArr2(arr1) {
  return arr1.reduce(function(pre,item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item)
  }, [])
}
console.log('递归方法',outputArr(gArr))
console.log('reduce方法',outputArr2(gArr))