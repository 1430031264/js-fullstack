1. 三个容器 一个是100%的进度条(灰色) 一个是可以拖拽的圆点 一个是已经开始了多久的进度条(红色)
2. touchStart touchMove touchEnd
3. 改变 width left 

```js
new Progress('selector',{ // selector 父容器，
  onDrag: () => {},
  onDragStart: () => {},
  onDragEnd: () => {},
  progress: 0.5, // 默认的当前进度条长度
  disableDrag: false, // 禁止拖拽
})
```
