## e.target vs e.currentTarget 
  e.target: 触发事件的目标元素
  e.currentTarget:  绑定事件的元素

##　js 分为3各部分
  1. es: ECMAScript  规定了js 的语法
  2. DOM：
  3. BOM：浏览器对象模型，与浏览器相关的 history  窗口resize

# dom
  将一个文档建模 为一个对象，通常是一棵树
  我们可以使用js 操作树上的每一个结点，关联事件

  ## ATTR
  ```html
  <p style class data-item ></p> 中间放的都是属性
  ```
  getAttribute
  setAttribute

  ## doucument
    整个树的入口，可以获取每一个树的结点
    document.documentElement 获取整个html 页面的结点
    不止 doucment.froms

  ## Event
    js 的事件流 / 事件模型
    事件流：
    事件模型:
    都是捕获 冒泡的那套

  ## Element
    .clientHeight： 网页可见区域高
    .clientWidth
    .clientTop: 一个元素顶部边框的宽度（以像素表示）。不包括顶部外边距或内边距
    .clientLeft

    .scrollHeight 滚动的高度
    .getBoundingClientReact() 返回元素大小，及其相对于视窗的位置（相对左上角）

  ## Node 
    注释、文本、元素 都算一个结点
    nodeType 
    同级结点相关的
      nextSibing
    所有子节点
      childNodes ()
      elementNodes 只获取元素结点

    remove
    append
    clone

  ## MutationsObserver
    监测 dom 树的改变