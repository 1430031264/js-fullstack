函数的节流与防抖

阿里js面试第一题
- 搜索建议
  google suggest
  根据input里面的value => value
  有问题的，cai kun xu 
  分词，搜索引擎要知道你要搜索什么东西  ex: 灭霸 电蚊液 不需要我们每敲一个就搜索一下 
  keyup 没有必要每次都触发ajax  太浪费性能了
  过滤一些无效的请求，打完一个单词再去搜索 
  world word 用js去实现，打完一个单词再去搜索

- 防抖
  频繁输入时，怎么减少请求呢？ 放入一个函数中debounce(ajax,500) 生成一个函数，控制执行
  当你停止输入时，执行一次  打完一个单词后，有意识的停一下
  setTimeout delay 之后一定会执行一次，在规定时间内会被clear掉
  clearTimeout(func.id)
  func.id = setTiemeout (fuunction(){
    func()
  },delay)

  句柄，不重复的数字，把它交给func  函数式对象 id属性前一次加了一个setTimeout 洗一次清除出