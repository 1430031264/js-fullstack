- 小程序 诞生于react大红之后
  MVVM 组件 vant
  数据驱动界面
  Vue 语法简洁
- Vue 与小程序共异
1. 思想
  网页，new Vue({
    el:'#app'
  })
2. 组件
  Vue.component('',{
    template:'',
    data(){
      return {

      }
    }
  })

- mvvm 不需要dom找元素 因为dom很低效，但是要找元素怎么办？ref 属性相当于id 

- 数组
  Math.random() 0-1  <0.5 消失

- 组件思想
  Vue.component('Heroes',{
    外界传来的数据，只有正确传递了才能传进来
    props:{ 参数以及参数的约束 }，
    template:``
  })
  这个就叫组件化思维
  <Heroes :heroes="heroes" />

  小程序里面，数据动态  src="{{item.src}}"
  vue里面，动态的  :src="item.src"
  props
  ref="allAudio"  this.$refs.allAudio
  wx:for  v-for  