<template>
  <button :class="'i-button-size' + size" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
function oneOf(value,validator) {
  for (let i = 0; i < validator.length; i++) {
    if (value === validator[i]) {
      return true
    }
  }
  return false
}
import bus from '@/bus/bus'
export default {
  props: {
    size: {
      validator (value) {
        return oneOf(value,['small','large','default'])
      },
      default: 'default'
    },
    disabled:{
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      msg: '我有一头小毛驴我从来也不骑，有一天我兴趣来潮骑它去赶集'
    }
  },
  methods:{
    handleClick (event) {
      // console.log(event)
      // console.log(1323)
      // this.$emit('on-click',this.msg)
      bus.$emit('todo',this.msg)
    }
  }
}
</script>

<style scoped>
button{
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.i-button-sizelarge{
  padding: 12px;
}
.i-button-sizedefault{
  padding: 8px;
}
.i-button-sizesmall{
  padding: 4px;
}
</style>
