弹性容器 
 justify-content：center 水平居中
 align-items center 垂直居中
 flex-direction:column 垂直排列盒子
 flex-direction:row  水平排列盒子
在弹性布局中，text-align：center 没用

text-overflow ellipsis 超出打点
word-spacing nowrap 强制一行显示
父容器font-size 0 子容器取消间距


插槽 slot
  通常我们在定义组件的时候设置一个插槽，本来组件里面是不能放东西，但是当我们在组件里面挖了一坑后 这个组件可以有一个谁调用这个组件就能往这个组件里面插入东西 
  意义：让组件灵活性更高，组件里面只用写结构就行，内容由插进去的东西决定



v-html 给页面添加内容  等同于再页面上挖个坑{{}}  v-html还支持放入方法 {{}}不行



getters 直接取出vuex仓库里面的东西来用，不能进行操作，只能取出来用
mutations 修改数据源
actions 
