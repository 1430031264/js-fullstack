# 了解哪几种设计模式
  1. 发布订阅
    event-bus
    // 订阅者
    event.on('click')
    event.on('receliveData')
    // 发布者 
    event.emit('click')

    发布的时候，要让所有人都收到

  2. 单例模式
    只存在一个实例
    应用实例： 弹窗

  3. 装饰者模式
    1. 动态增加功能， 无侵入的（不破坏原来的代码）
    实现流程：
    1. 目的：功能增强
    2. 把原来的方法取到
    3. 定义一个新的方法，新的方法里面包含原来的方法，不改变原来的代码
    4. 优点，没有装饰可以用，有了装饰者会更好用

    es7
    decorator  @
    装饰：
      1. 类
      2. 方法
      3. 属性

# babel
  负责编译
  怎么编译？ 全靠babel的插件 
  const -> var
  Promise -> 回调
  Array.isArray -> es5 ->->

  presets: 一堆插件的集合
  preset-env 功能就是 es6 -> es5 ，集合了很多插件
  plugin：某个插件