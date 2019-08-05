- js 垃圾回收是自动的
- 回收内存
  function 局部变量
  跨页面时
1. 可达性 作为评判的依据的
  显而易见的，因为一些原因不可删除
  - 全局变量 // 不会销毁
  - 当前嵌套调用链上的其他函数的变量和参数
  这些值成为根
2. 如果引用或引用链可以从根访问任何其他值，则认为该值可访问
```js
let user = {
  name: "John"
}
```

global
  |
  Object
name: "John"
user 全局变量， = 引用式赋值
name 一个基本属性 -> 字符串类型的 John 

user = null; // 触发一次垃圾回收
```js
let user = {
  name: 'John'
}
let admin = user
```
  global
user    admin
user = null; // 此时内存不会回收，因为还是可达的  
