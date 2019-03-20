- CSS 命名词汇
  feeds 复数  *-item 单数
- html 结构及布局
  从上到下，从左到右，还有语义化和功能性
  1. 套路 
    content>h3+p
  2. 舍得做盒子
  3. a 作为盒子，在移动端是很正常的，
    display: block  行内转块级
  4. 盒子模型
    文字line-height padding margin
  5. 文字截断
    天猫里面有很多商铺信息，是由商家填的，高度不被限制
    display:-webkit-box; 新的盒子模型，像flex 来划分父元素的空间
    overflow:hidden;      超出隐藏
    -webkit-line-clamp     行数
    -webkit-box-orient: vertical     默认水平划分，现在给它设定为垂直划分

  6. 浮动  float: left | right
    是布局里最常用的 
    会离开文档流，我们一般会在一个盒子里，将要浮动的元素写在最前面，左右布局，在flex 布局之前，我们一般借助与float 来布局
    图片的宽高？  宽度用百分比，自适应的需求
    高度怎么做？  div padding-top: 自身的宽度来做比例100%  正方形
    自适应的设备里盒子的等比例设置 width 百分比
    高度用padding-top

    为什么要用浮动：当我们将元素定成行内元素的时候，元素间有间隙，用float 能消除间隙，而且float的兼容性好一点