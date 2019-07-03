##q1
  - JavaScript全局执行上下文为我们创建了两个东西:全局对象和this关键字.
  - this 的作用域 全局的是指向windows 如果是一个函数里，作用域就在被调用的函数里面

#__proto__ 和 prototype 的区别 
  1. 万物都有__proto__,只有函数才有原型链(prototype) 对象没有原型链 
  2. 
    对象__proto__ 直接a.__proto__就能直接看到了
    但是函数b.__proto__ 看到是一个函数, 要b.__proto__.__proto__才能看到b的原型 
    相当于一个糖衣药片  对象的__proto__ 就能直接看到糖衣里面的药 但是函数的__proto__只能看到糖衣，要__proto__.__proto__才能看到糖衣里面包裹的东西

#new 方法的实现的原理
  1. 创建一个空对象，构造函数的this指向这个空对象
  2. 这个对象被执行一个原型链接的步骤
  3.  执行构造函数，将函数中的属性或方法加入到this引用的对象上面
  4. 如果构造函数中没有返回其他对象，那么返回this，即创建的新对象，否则，返回构造函数返回的对象


## q2  call,bind,apply
  1. b.call(a,5) 就相当吧b里面的作用域强行指向到a里面去,第一个参数一定是this作用域要去到的地方，后面的参数都是该作用域里面用到的逻辑参数
  2. b.apply(a,[9])  就相当吧b里面的作用域强行指向到a里面去,第一个参数一定是this作用域要去到的地方，后面的参数都是该作用域里面用到的逻辑参数,不同的是，后面的参数一定要用使用数组形式的值
  3. b.call() 或者 b.apply() 此时this的作用域会指向window
  4. var c = b.bind(a)
      c()
   bind改变函数内部this指向,指定函数c 的 this绑定为 a，与call的不同之处：产生一个新函数，之后在运行的时候，this就是被绑定的对象,
  var c = b.bind(a,5)
  c(3,4) 输出的是8  bind方法接收的参数是按照形参的顺序进行的

## q3 解构 和 浅拷贝和深拷贝
    // 浅拷贝和深拷贝  比如一个人，浅拷贝是拿人的影子来用，人死了，影子就没了，深拷贝的话就是我克隆一个人，就算那个真的人已经死了，克隆的人还在
  #浅拷贝
    浅拷贝  原数据改变，拷贝的数据也会变  被影响的非基础数据类型的数据才会被影响  
    官解：浅拷贝是会将对象的每个属性进行依次复制，但是当对象的属性值是引用类型
        时，实质复制的是其引用，当引用指向的值改变时也会跟着变化。当改变的不是基本类型的时候,不会影响拷贝的数据

    自解：浅拷贝只是第一层属性进行拷贝，当第一层的属性为基本数据类型时，新对象
        和原对象互不影响，但是而过第一层的属性值是#复杂数据类型 #那么新对象和原对象的属性值其指向是同一块内存地址

  #深拷贝
    官解：深拷贝复制变量值，对于非基本类型的变量，则递归至基本类型变量后，再复
        制。 深拷贝后的对象与原来的对象是完全隔离的，互不影响，对一个对象的修改并不会影响另一个对象。
    自解：深拷贝是将对象及值复制过来，两个对象修改其中任意一个的值，其中一个不
        会改变
  #解构      
  1. 数组解构
    let [x,y] = [1,2] // x = 1, y = 2
  2. 对象解构
    let { foo,bar } = { foo:'aaa',bar:'bbb' } //foo = "aaa", bar = "bbb"
    另：允许给赋值的变量重新命名 如 let {foo: baz} = {foo:'abc'} 已经吧foo重新命名成了baz  //baz = "baz"

## q4 闭包
  函数可以记住并访问词法作用域外的函数的作用域  
  闭包是指有权限访问另一个函数作用域中的变量的函数
  1. 能访问函数定义时所在的词法作用域(缺：阻止当前词法作用域被回收)
  2. 私有化变量
  3. 模拟块级作用域


##q5 数组去重
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
      
