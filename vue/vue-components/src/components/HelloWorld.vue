<template>
  <div class="hello">
    <v-button size="large" @click.native="handleClick">按钮</v-button>
    <v-menu></v-menu>
  </div>
  
</template>

<script>
import button from '@/components/com/button'
import menu from '@/components/com/menu'
export default {
  name: 'HelloWorld',
  provide () {
    return {
      name: this.obj
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj: {
        name: '小毛驴'
      }
    }
  },
  components: {
    'v-button': button,
    'v-menu': menu
  },
  methods:{
    handleClick (val) {
      // console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
