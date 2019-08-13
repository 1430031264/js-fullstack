```js
for(var i =0; i < 10; i++) {
  console.log('forv循环体中：' + i)
}
console.log('forv循环体外' + i) 
```
循环体中使用var 声明变量，会污染全局变量

# 变量提升 
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

  - undefined 和 null 的不同
    undefined 变量声明后，没有被赋值，则为undefined
    null 是一个值，一个空值，

# 解构赋值
  ## 数组解构
    要有一定的顺序，不能乱，要两边的结构一致

  ## 对象的解构
    没有顺序，但是根据key 来解构的
  
  ##　字符串解构

# 对象扩展运算符 ... 
  不确定个数的时候，使用... 
  ```js
    // ========= 对象扩展运算符==========
    let arr1 = ['a','b','c']
    // let arr2 = arr1 // 修改前
    let arr2= [...arr1]
    console.log(arr2)
    arr2.push('d')
    console.log(arr1)
    // 这种情况下。当我们修改了arr2 的时候 arr1 也会跟着
    // 改变，但是我们并不想arr1 改变，此时就呢个用到对象扩展运算符(...)
  ```
# rest 运算符 （...）
  ```js
  
    // =========== rest 运算符 （...）
    function foo(first, ...args) {
    // console.log(args.length)
    for(let val of args) {
      console.log(val)
    }
    }
    foo(1,2,3,4,6,8,7,9)
    // 运用 当我们知道了前面固定数量的字符串长度之后，后面的长度我们不知道，此时可以个使用rest 运算符
  ``` 