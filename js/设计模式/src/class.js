// function name (target) {
//   // 把原来的东西获取到
//   console.log(target)
//   target.Tname = 'lilei'
// }
// @name
// class Man {
  
// }
// console.log(Man.Tname)


function name(pName) {
  return function (target) {
    target.wName = pName
  }
}
// @ 后面接的就是一个方法
@name('lilei')
class Man {
  
}

@name('hanmeimei')
class Woman{}

console.log(Man.wName)
console.log(Woman.wName)