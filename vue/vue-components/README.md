父子间通信，子组件里面的方法，不用$emit抛出，父组件也能使用 
  原来是子组件this.$emit('on-click',this.msg) 抛出 on-click 方法，父组件使用@on-click使用这个抛出的方法，
  
  现在 另一个方法是@click.native="handleClick" 使用click.native 后面接和子组件一样的类名


以前兄弟组件之间的通讯我们是使用的vuex，今天我们将另一种方法，使用bus
先在src里面建立一个bus文件夹，里面建一个bus.js ,内容
  import Vue from 'vue'
  const bus = new Vue()
  export default bus
然后在两个兄弟间都引入这个bus，其中一个兄弟bus.$emit('todo',this.msg)，另一个兄弟
```js
created () {
    let self = this
    bus.$on('todo',(val) => {
      console.log(val)
      self.msg = val
    })
  }
```
即可完成兄弟之间的通信


父子间通信还可以使用provide 和inject 父组件通过provide来提供变量，然后在子组件中通过inject来注入变量，不论子组件有多深，只要调用了inject 那么就可以注入provide中的数据，而不是局限于只能从当前父组件的prop属性来获取数据，只要在父组件的生命周期内，子组件都可以调用