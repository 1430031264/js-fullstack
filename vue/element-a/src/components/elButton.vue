<template>
  <button class="el-button"
  :disabled="buttonDisable"
  :class="[type ? 'el-button--' + type : '',size ? 'el-button--' + size : '',{'is-disabled' : buttonDisable}]"
  @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    type: {
      string: String,
      default: 'default'
    },
    size: String
  },
  computed: {
    buttonDisable() {
      return this.disabled
    }
  },
  methods: {
    handleClick(evt) {
      // $emit 出去的方法 可以使用 v-on:名字   使用 这个名字可以自己取
      this.$emit('click', evt)
    },
  },
}
</script>

<style>
.el-button--large{
  font-size: 30px;
}
.el-button--middle{
  font-size: 20px;
}
.el-button--size{
  font-size: 10px;
}

</style>
