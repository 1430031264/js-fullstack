// 字符串拼接

// es5 版本 使用 + 拼接字符串
let name = '张三'
let blog = '我'+ name +'lei了lei了，你们去哪里了,'

// es6 版本  使用字符串模版拼接  `${}`
let blog2 = `<br />没想到吧！！！我${name}又回来了<br />`

document.write(blog)
document.write(blog2)

// es6 字符串模版优点：
  // 1. 可以在 `` 中加入空格、h5标签、运算等等，进行各种操作

  // 2. 方便字符串查找

let msg = `hello，大家好，我是张三，我张三别的本事没有，就是会吹牛，如果有什么不服的，那当我张三没说`

// document.write(msg.indexOf(name)) es5 查找有没有张三这个名字，但是这个方法找的位置
document.write(msg.includes(name))  // 这里是查找是否有张三这个名字，有返回true，没有返回false
