global.gc()
var memo = process.memoryUsage()
console.log(memo)

let wp = new WeakMap()
let arr = new Array(1000000) // +1
wp.set(arr,'111') // 不计入垃圾回收机制
global.gc()
console.log(process.memoryUsage())

arr = null // -1 
global.gc()
console.log(process.memoryUsage())