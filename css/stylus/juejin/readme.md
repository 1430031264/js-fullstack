##　ＣＳＳ　预编译语言　ｓｔｙｌｕｓ
  写的是stylus　．styl　在浏览器中运行的是．css
  前端工作流在发生变化
  界面开发工作被重新定义了，从小米加步枪变成生产线
  stylus main.styl -o main.css 
  编译 -o 输出
  stylus 提供了css 不具备的变量定义，模块化，函数，快捷 新的语法

  /*这个是一个变量，可以替换每个标签里重复的属性*/
    $fz = 14px  

  -w  watch 监听文件修改， 同步编译
  vertical-align middle 垂直居中

  1. 可以定义变量
  2. 可以减少输入{}  :  ;  
  3. 函数
  4. 嵌套
    .book-bought  购买模块
      .label
        img
    
    &引用上一级的层次类名，同时可以缩进，这样可以省去重复上次的选择
    
flex 是css　在移时代最爽的布局方案，手机端子元素们对齐方式，　水平，主轴　justify-content
纵轴 align-items center
传统方案是 img + 兄弟节点  vertical-align:middle

flex的考点 自适应
  1. flex:1 比例划分 若只给一个元素设置，那他讲占据其他元素之外的所有空间
  2. 父元素与多个子元素之间的关系
    水平对齐方式 justify-content
    垂直对齐方式 align-items
  3. 可能会有剩余的空间  flex-grow：1  来分配空间