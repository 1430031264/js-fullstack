// --------- 创建数组的方法 -------------------------
// var arr = []  // 等于 var arr = new Array() 
// var arr = new Array(5)  创建一个长度为5 的数组
// var arr = new Array(1,2,3,4,5) 创建一个[1,2,3,4,5] 的数组
// var arr = Array.of(7) 创建一个数组 [7]，可以放多个参数

// 判断是否为数组
// var arr = [1,2,3,4,5]
// if(arr instanceof Array){}
// if(Array.isArray(arr)){}
// if(Object.prototype.toString.call(arr) == '[object Array]'){}
// if(arr.constructor == Array){}  数组的构造器为 Array
// console.log(arr.constructor) //[Function: Array]

// arr.unshift(0) // 头部加一位
// arr.pop() // 删除最后一位
// arr.shift() //删除头
// -------------------------------------------------
// let arrLike = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3
// }
// Array.from(arrLike)
// console.log(Array.from(arrLike))

// -----------------------------------------------
// for in 使一个对象变成数组----
// let arrLike = {
//   0: 'a',
//   1: 'b',
//   2: 'c'
// }
// for(let i in arrLike) {
//   let newa = []
//   newa.push(arrLike[i])
//   console.log(newa)
// }


// let str = 'abc'
// // ['a','b','c']
// let newArray = Array.from(arrLike)
// let newArray2 = Array.from(arrLike, (v) => v + '1')
// let newArray3 = Array.from(str)

// --------- join      sort----------
// let Arr = [2,3,4,5,6,1]
// // 1|2|3|4|5|6
// let test =  Arr.join('|')
// console.log(test)
// Arr.sort((a,b) => a - b)
// console.log(Arr)

// ---------splice   slice --------------
// var arr = [2,3,4,6,1,9]
// let test = arr.slice(0.2)  //[2,3]
// let test = arr.splice(0,0,7) //  [7, 2, 3, 4, 6, 1, 9 ]
// let test = arr.splice(0,2,7) //[ 7, 4, 6, 1, 9 ]
// console.log(arr)


var arr = [1,2,3,4,5]
// copyWithin()第一个参数 从哪开始替换，第二个从哪里开始复制，第三个复制几个
// arr.copyWithin(0,3) // [ 4, 5, 3, 4, 5 ]
// console.log(arr)

// arr.fill(value,start,end)
// 用value 从start开始替换，到end结束，不包括end 可以理解为end为替换的长度(个数)
// arr.fill(9,0,2)
// console.log(arr)
// arr.indexOf(2) // 1
// 从后往前数
// arr.lastIndexOf(2) // 1
arr.find((v) => v < 3)