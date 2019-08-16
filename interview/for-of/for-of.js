function foo() {
  for (let arg of arguments) {
    console.log('arg', arg);
  }
}
foo('a', 'b', 'c');
// 存在Symbol.iterator属性 才能有迭代
var arr = [];
var str = 'abc';
var map = new Map();
var obj = {}; //不存在Symbol.iterator属性，不符合可迭代协议，所有不能用for of 来迭代
let initIndex = 0, maxIndex = 3;
obj[Symbol.iterator] = () => ({
  next: function () {
    initIndex++;
    if (initIndex <= maxIndex) {
      return {
        done: false,
        value: initIndex
      }
    } else {
      return {
        done: true,
        value: undefined
      }
    }

  }
})
for(let a of obj){
  console.log(a);
}
console.log(
  typeof arr[Symbol.iterator],
  typeof str[Symbol.iterator],
  typeof map[Symbol.iterator],
  typeof obj[Symbol.iterator]
)

