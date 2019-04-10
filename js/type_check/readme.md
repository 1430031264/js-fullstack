类型 typeof
js 里面复杂数据类型  object
Array 是可以遍历的对象
function 是可以运行的对象
JSON Objeect  对象字面量是可以枚举的对象  for(key in)
typeof 半吊子，用来做类型检测不可靠 typeof [] 没有办法跟JSON区分出来

我们希望有一个方法可以区分Array JSON Object

1. 用对象字面量来做面向对象 区别于原型式的 我们要添加几个方法，因为它没有实例化的需要 Type 将在程序中就做类型检测
var Type = {}; 不用装数据，只是用面向对象来组织你的代码
2. 使用 for 来一次性的加完会有同步异步的问题，当调用的时候，for循环已经完成了。这时我们可以使用闭包来讲type作用域封闭起来，立即执行函数，同步执行，同步检测类型函数的定义，因为函数嵌套，形成了闭包，当函数在被调用时（异步），找到定义时刻的type

3. Object.prototype.String.call(obj)
  Object? 祖先 顶级对象，函数才有prototype属性，在原型上有这样的toString 方法，解决typeof的尴尬"[object Object]" 数组就是"[object Array]" 方法的执行方式可以被改变，所以我们就可以用Object.prototype.String.call(obj)