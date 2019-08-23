function log(target,name,descriptor) {
  // console.log(target,name,descriptor)
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
    console.log('add 被调用')
    return originalMethod(...args)
  }
}

// function Operation () {}
// Operation.prototype.add() = {}
// defineProperty(Operation.prototype,add , {}) // 类中定义的方法一个一个加到Operation中

class Operation {
  @log
  add (a, b) {
    return a + b
  }
}
const opt = new Operation()
// opt.add(1,2)
console.log('opt',opt.add(1,2))

let obj = {}
Object.defineProperty(obj, 'add', {
  value: function(a,b) {
    return a + b
  }
})
console.log(obj.add(3,4))