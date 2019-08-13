```js
for(var i =0; i < 10; i++) {
  console.log('forv循环体中：' + i)
}
console.log('forv循环体外' + i) 
```
循环体中使用var 声明变量，会污染全局变量

- 变量提升 
  js 可以先使用变量在再声明，但是只有使用var 声明的变量能获得提升，而且，变量的提升只会提升声明，不会提升赋值
  ```js
  a = 2
  console.log(a)
  var a //  输出 2

  //   ----------
  console.log(a)
  var a = 2 // 输出 undefined 因为 var a = 2 相当于 var a; a = 2; 两个语句，var 的变量提升只会提升声明的语句，即 var = a; 这一句会被提升，但是a = 2 这一句不会被提升
  ```
  let 声明的变量在被使用前都会存在一个临时性死区，在被声明前使用这个变量，会报ReferenceError 的错
  ```js
  (function hhh() {
    console.log(j) // ReferenceError: j is not defined
    let j = 77
  })()
  ```
  所以使用let 声明的变量应该在执行的语句前面