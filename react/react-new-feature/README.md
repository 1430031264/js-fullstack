## why
​	以前 async mode 现在 concurrent mode,
​	目的: 让 react 整体渲染有一个优先级的排比

1. js 单线程的
2. 浏览器是多线程的
  1. UI 渲染线程
  2. js 解析
  3. http
3. js 线程和 UI 是互斥的, js 可以操作dom，UI 不能一边渲染一边改变
4. 卡顿 js 占据了大量资源空间，UI 来不及响应
