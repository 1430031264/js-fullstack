# q1
  - JavaScript全局执行上下文为我们创建了两个东西:全局对象和this关键字.
  - this 的作用域 全局的是指向windows 如果是一个函数里，作用域就在被调用的函数里面

## __proto__ 和 prototype 的区别 
  1. 万物都有__proto__,只有函数才有原型链(prototype) 对象没有原型链 
  2. 
    对象__proto__ 直接a.__proto__就能直接看到了
    但是函数b.__proto__ 看到是一个函数, 要b.__proto__.__proto__才能看到b的原型 
    相当于一个糖衣药片  对象的__proto__ 就能直接看到糖衣里面的药 但是函数的__proto__只能看到糖衣，要__proto__.__proto__才能看到糖衣里面包裹的东西

## new 方法的实现的原理
  1. 创建一个空对象，构造函数的this指向这个空对象
  2. 这个对象被执行一个原型链接的步骤
  3.  执行构造函数，将函数中的属性或方法加入到this引用的对象上面
  4. 如果构造函数中没有返回其他对象，那么返回this，即创建的新对象，否则，返回构造函数返回的对象


# q2  call,bind,apply
  1. b.call(a,5) 就相当吧b里面的作用域强行指向到a里面去,第一个参数一定是this作用域要去到的地方，后面的参数都是该作用域里面用到的逻辑参数
  2. b.apply(a,[9])  就相当吧b里面的作用域强行指向到a里面去,第一个参数一定是this作用域要去到的地方，后面的参数都是该作用域里面用到的逻辑参数,不同的是，后面的参数一定要用使用数组形式的值
  3. b.call() 或者 b.apply() 此时this的作用域会指向window
  4. var c = b.bind(a)
      c()
   bind改变函数内部this指向,指定函数c 的 this绑定为 a，与call的不同之处：产生一个新函数，之后在运行的时候，this就是被绑定的对象,
  var c = b.bind(a,5)
  c(3,4) 输出的是8  bind方法接收的参数是按照形参的顺序进行的

# q3 解构 和 浅拷贝和深拷贝
    // 浅拷贝和深拷贝  比如一个人，浅拷贝是拿人的影子来用，人死了，影子就没了，深拷贝的话就是我克隆一个人，就算那个真的人已经死了，克隆的人还在
  ## 浅拷贝
    浅拷贝  原数据改变，拷贝的数据也会变  被影响的非基础数据类型的数据才会被影响  
    官解：浅拷贝是会将对象的每个属性进行依次复制，但是当对象的属性值是引用类型
        时，实质复制的是其引用，当引用指向的值改变时也会跟着变化。当改变的不是基本类型的时候,不会影响拷贝的数据

    自解：浅拷贝只是第一层属性进行拷贝，当第一层的属性为基本数据类型时，新对象
        和原对象互不影响，但是而过第一层的属性值是#复杂数据类型 #那么新对象和原对象的属性值其指向是同一块内存地址

  ## 深拷贝
    官解：深拷贝复制变量值，对于非基本类型的变量，则递归至基本类型变量后，再复
        制。 深拷贝后的对象与原来的对象是完全隔离的，互不影响，对一个对象的修改并不会影响另一个对象。
    自解：深拷贝是将对象及值复制过来，两个对象修改其中任意一个的值，其中一个不
        会改变
  ## 解构      
  1. 数组解构
    let [x,y] = [1,2] // x = 1, y = 2
  2. 对象解构
    let { foo,bar } = { foo:'aaa',bar:'bbb' } //foo = "aaa", bar = "bbb"
    另：允许给赋值的变量重新命名 如 let {foo: baz} = {foo:'abc'} 已经吧foo重新命名成了baz  //baz = "baz"

# q4 闭包
  函数可以记住并访问词法作用域外的函数的作用域  
  闭包是指有权限访问另一个函数作用域中的变量的函数
  1. 能访问函数定义时所在的词法作用域(缺：阻止当前词法作用域被回收)
  2. 私有化变量
  3. 模拟块级作用域


# q5 数组去重
  1. es6 里面的Set 方法 函数体：
     ```js
    function uniq(arr) {
      return [...new Set(arr)] 
    }
    ```
  2. 使用indexOf方法  查找下标，如果同样的值能找到下标就不放进新的数组
    ```js
    function uniq(arr) {
      let res = []
      for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
          res.push(arr[i])
        }
      }
      return res
    }
    ```
  3. includes
    ```js
    function uniq(arr){
      let result = []
      for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
          result.push(arr[i])
        }
      }
      return result
    }
    ```
  4. 使用map方法
    ```js
    function uniq(arr) {
      let map = new Map()
      let res = new Array()
      for ( let i = 0; i < arr.length; i++) {
        //map.has()返回一个bool值，用来表明map 中是否存在指定元素.
        if (map.has(arr[i])) {
          //吧arr[i]都push进去（key，value）
          map.set(arr[i],true)
        } else {
          map.set(arr[i],false)
          res.push(arr[i])
        }
      }
      return res
    }
    ```
  5. 使用reduce
    ```js
    function uniq(arr) {
      return arr.reduce((prev,cur) => 
        prev.includes(cur) ? prev : [...prev,cur],[]
      )
    }
    ```

# q6 防抖节流函数原理
      

# q7 __proto__ 和 prototype 的关联 
  1.  __proto__是每一个实例都有的属性，可以访问[prototype]属性，
    实例的  __proto__与其构造函数的prototype指向的是同一个对象
      let wn = new Friends('wn')
      wn.__proto__  ===  Friends.prototype

  2. typeof其实就是判断参数是什么类型的实例，就一个参数，返回一个用来表示表达式的数据类型的字符串。
  3. instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。用于判断一个变量是否某个对象的实例

  4. 实际上两种判断类型的运算符都有缺陷，那么我们如何能准确的判断数据类型呢？
    使用Object.prototype.toString.call()    原理：
    ·Object.prototype.toString 会取得对象的内部属性，
    ·然后依据这个内部属性返回一个'[Object 对应的数据类型]' 
    ·然后.call() 将作用域放到这个'[Object 对应的数据类型]'里面去，我们就可以取到任何对象的内部属性
    ·然后吧类型检测转化为字符串比较，达到目的

# q8 parseInt(string,radix)
    string
      要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用  ToString 抽象操作)。字符串开头的空白符将会被忽略。
    radix
      一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。比如参数"10"表示使用我们通常使用的十进制数值系统。始终指定此参数可以消除阅读该代码时的困惑并且保证转换结果可预测。当未指定基数时，不同的实现会产生不同的结果，通常将值默认为10。
    parseInt('2') 默认十进制 输出 2
    parseInt('2'，1) 输出NaN
    parseInt('4'，3) 输出NaN
    parseInt('4'，4) 输出NaN
    parseInt('4'，5) 输出4
    进制数不能小于2 小于2都是NaN
    如果传入的字符串里面的每位的最大数字大于或等于进制数，也会输出NaN

# q9 事件委托
    ```js
    window.onload = function() {
      var oUl = document.getElementById('ul-list')
      oUl.addEventListener('click',function(e) {
        console.log(e)
        var target = e.target || e.srcElement
        console.log(target.innerHTML)
      })
    }
    ```
    作用：支持为同一个DOM元素注册多个同类型事件

# 对es6的理解
  es6 相对于es5 ECMAScript 的第六次修订 ES2015 随着babel webpack 构建工具的成熟，es6 已成为 js 编程的事实标准。
  我任务 es6 比 es5更加简介，提高的开发效率，让js 代码更优雅

  - 新增的特性
    let 变量 和 const 常量声明，具有 var 没有的块级作用域，比如循环事件监听时，闭包就不需要了，让代码更好理解。
    var 由变量提升的能力，但是 let const 不会到顶级对象去，两者中要使用的变量一定要声明

  - 箭头函数
    简化了函数的表达形式
    1. 不用function 关键字 () => {}
    2. 如果只有一个参数， () 也能省 a => {}
    3. 如果代码直接返回，{} 也可以省，右侧代码就是返回值 a => a + 1
    4. 有效的规避了 this 丢失的问题，指向上一级 
  
  - 模版字符串
    增强版的字符串， 用 ``（云括号）,它的多行表达方式，特别适合 react jsx template 的书写 
    dom 或 html 模版的构建更加优雅

  - 解构赋值
    可解, spread可合, react 从对象或数组中提取值，对变量进行赋值，提高开发效率

  - for of 循环
    解决了for 单纯的 记步循环，这个对数组友好，但是对 对象、set、map不好，所以for of 让对象、set、map 以及字符串都可以遍历

  - SET es6 新增的数据结构，类似数组，可为数据提供唯一的、没有重复的值

  - import export es6 的模块化,es6原生支持的module, 将js 代码跟个成不同的小块独立的开发，一个文件一个类，一个个独立的模块，比如说utils api

  - ... 展开运算符

  - 终于支持原生的class 关键字了， js 有了传统面向对象的写法， extends 不过它只是语法糖，底层还是基于原型的面向对象
  
  - promise 为 js 提供了异步解决方案，规避了回调地狱(then) 代码的书写和执行是一样的

  - 更棒的异步解决方案 es7 的 async await 
    koa 就是基于 async await 快速取代了 express的江湖地位
  
  - vue react 响应式编程依赖的 proxy defineProperty 监听对象的改变，做一些事情

  - es6 提供了新的数据类型、symbol 

# q10、q11 理解TCP协议的三次握手和四次挥手 原生js实现简单的vue双向数据绑定原理
  ## 一个页面从输入URL 到页面加载显示完成，这个过程发生了什么
    tcp 协议作用在 http 协议之前，TCP的三次握手(和服务器say hello)和四次挥手(和服务器say goodbye)
    用户输入了URL后浏览器做的事情：
      1、浏览器的地址栏输入URL并按下回车。
      2、浏览器查找当前URL是否存在缓存，并比较缓存是否过期。
      3、DNS解析URL对应的IP。
      4、根据IP建立TCP连接（三次握手）。
      5、HTTP发起请求。
      6、服务器处理请求，浏览器接收HTTP响应。
      7、渲染页面，构建DOM树。
      8、关闭TCP连接（四次挥手）。

# q12 get 请求 和 post 请求在缓存上面的区别
  ## url的地址可不可以无限长？
    虽然 http协议 中没有限制长度，但是浏览器单方面做了这方面的限制，且只限制 get 请求，不会限制 post 请求 ，因为 get 请求会留下缓存，地址太长，需要缓存的数据太大，占用大量缓存资源，post 因为没有缓存，所以不限制长度
    常见浏览器的限长：
    IE : 2803
    Firefox:65536
    Chrome:8182
    Safari:80000
    Opera:190000
  ## 区别
    1. get 请求类似于查找的过程，用户获取数据，可以不用每次都与数据库廉价，所以可以使用缓存
    2. post 请求不同，post 一般做的是修改和删除数据的工作，所以必须与数据库交互，所以不能使用缓存

    因此，get 请求更适合于请求缓存

# q13 前端事件流
    在 dom 标准的事件模型中，事件流包括下面几个阶段：
      1. 事件捕获阶段
      2. 处于目标阶段
      3. 事件冒泡阶段
    addEventListener 的点三个参数是用来设置 冒泡还是捕获的 true为捕获，false(默认)为冒泡,ie浏览器只支持事件冒泡

# q14 图片 懒加载和预加载的区别
    预加载：提前加载图片，当用户需要查看图片时，直接从本地缓存中渲染
    懒加载: 作为服务器的前端优化，减少请求或延迟请求
    懒加载对服务器有一定的缓解压力作用，预加载则会增加服务器的压力

# q15 js中的各种位置
    clientHeight：表示可视区域的高度，不包含border和滚动条
    offsetHeight：表示可视区域高度，包含border和滚动条
    scrollHeight：表示所有区域的高度，包含因为滚动被隐藏的部分
    clientTop：表示边框border的厚度，在未指定的情况下，一般为0
    scrollTop：表示滚动后被隐藏的高度

# q16 js拖拽功能的实现
    