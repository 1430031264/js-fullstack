- 圣杯布局
 意义：让我们最主要的东西最先加载出来

- 清除浮动---弥补父容器高度塌陷问题
  五种方法，通常作用在父容器上面
  1. 方法一
    在父容的底部加一个空的div <div style="clear:left"></div> 给一个清除浮动的行内样式，我们的浮动是left ：后就是left,浮动是right :后就是right
    经验：在父容器加多一个专门清除浮动的类名：clearFix
  2. 方法二
    让父容器也脱离文档流，能影响父容器后面的元素，但是不负责任，不建议使用，只是解决了高度缺陷的问题，还会带来其他问题
    div.content{
      float:left;
    }
  3. 方法三
    使用一个伪类after，将这个伪类的display设置为块级元素，然后加上clear：both
    经验：一般给父元素加一个新的类名clearFix，专门用来清除浮动，这样就避免了如果伪类中刚好有内容的情况
      .clearFix::after{
      content:"";
      clear:both;
      display: block;
      height: 0;/*如果伪类中刚好有内容，就加上这两行，这样就不用重新写一份*/
      visibility: hidden;
    }
  4. 方法四
    overflow: hidden;   利用BFC（块级格式化上下文 ） overflow有三个属性，auto、scroll(加一个滚动条)、hidden,这三个属性的效果来弥补父容器的高度塌陷
    div.content{
      overflow: hidden/auto/scroll;
    }
  5. 方法五
    尼古拉斯大师   把父容器的display 设置为table可以创建一个匿名表格单元，这个单元可以直接触发BFC效果
    .content{
      display:table;
    }
    这个方法最简便，但是最不推荐使用，因为造成很多莫名其妙的问题，会破坏页面本身的设计，也不知道会变成什么样