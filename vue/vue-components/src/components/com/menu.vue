<template>
  <div class="menu">
    {{msg}}
    <!-- {{name.name}} -->
    {{app.user}}
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  inject: ['app'],
  data () {
    return {
      msg: '我有一头小毛驴我从来也不骑，有一天我兴趣来潮骑它去赶集'
    }
  },
  created () {
    let self = this
    bus.$on('todo',(val) => {
      console.log(val)
      self.msg = val
    })
  }
}
</script>

<style>

</style>
