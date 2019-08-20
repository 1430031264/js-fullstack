// global
// gc -- garbage collection
global.gc()
var memo = process.memoryUsage()
console.log(memo)
let map = new Map()
let arr = new Array(1000000) // +1
map.set(arr,'666') // +1
global.gc()
console.log(process.memoryUsage())

map = null // -1
arr = null // -1
global.gc()
console.log(process.memoryUsage())
