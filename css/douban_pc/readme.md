PC mobile?
mobile first 
flex 在一些老的浏览器里面用不了，IE10+
替代方案：布局 float  浮动布局，撑起来PC布局

float 会离开文档流
BFC 

float 离开文档流跟  position: absolute 不一样
float 是魔鬼 会影响兄弟元素

那两列式布局，除了float 还有谁？
inline-block   grid 