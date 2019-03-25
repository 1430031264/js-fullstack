1. 计算如下 box1，box2 两个盒子模型的宽高，并简要列出计算过程
.box {
  width: 100px;
  height: 100px;
  padding-top: 20px;
  margin-top: 20px;
  border: 2px solid aqua;
}
.box1 {
  box-sizing: border-box;
}
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>

    box-sizing: border-box 的作用使设置的margin 或者padding 占用盒子自己内部的空间，不会往外扩展

    所以box1 的盒子宽高为100*100  其中宽度为边框的4 + 96   高度为 padding的20 + 边框的4 + 76

    box2 的盒子宽高为104*124   其中宽度为边框 4 + 100  高度为 padding的20 + 边框的4 + 100


