##CSS 类选择器
- 类选择器和ID选择器的区别
  同：可以应用于任何元素
  异：
    - ID选择器只能在文档中使用一次，每次只能同同时用一个，
    <p>134689<span id="stress">胆小如鼠</span>
    <span id="stress">勇气</span>4658946</P> 同一个段落里，这样用是错误的，此时可以用类选择器

    - 类选择器词列表方法为一个元素同时设置多个样式。一个元素可以有多个类名，然后每个类名都可以设置一个样式,上面的代码，<p>134689<span class="stress">胆小如鼠</span>
    <span class="stress">勇气</span>4658946</P>

-     >     子选择器
      使用>  可以指定一个父类中的第一个子类（第一代）赋予该子类样式
        .date>span{}

-   空格      后代选择器
   后代选择器的作用与子选择器类似，但不同的是，子选择器仅限第一代子类，而后代选择器则是使父类中所以的后代类
   .date1  span{}

-     *{}    通用选择器
  作用:匹配html中所有标签元素

- 伪类选择器
    a:link {color:gray;} 链接没有被访问时，前景色为灰色
	  a:visited{color:blue;}链接被访问后，前景色为蓝色
		a:hover{color:red;}/*鼠标悬浮在链接上时前景色为绿色*/
		a:active{color:blue;}/*鼠标点中激活链接那一下前景色为蓝色*/

-    ,       分组选择器
  能同时给多个标签元素设置相同的样式，每个标签之间用，隔开

## 权值
/*权值问题，下面的样式权值高，吧上面的给覆盖了*/
    p {
      color: red;
    }

    .first {
      color: green;
    }
    标签的权值为1，类选择符的权值为10，ID选择符的权值最高为100。
    ！important可以修改样式的权值，使之样式权值处于最高权值，从而达到自己的效果，不会被其他样式覆盖

#css基础
    font-weight:blod; 黑体
    font-style:italic;斜体
    
    text-decoration下划线  参数：
        none : 　无装饰
        blink : 　闪烁
        underline : 　下划线
        line-through : 　贯穿线
        overline : 　上划线