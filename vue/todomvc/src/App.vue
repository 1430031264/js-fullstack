<template>
  <div>
    <counter />
    <!-- <counter-brother :count="count" /> -->
  </div>
</template>

<script>
//两个兄弟组件,要共享 count 数据 count就不应该属性counter组件私有，
// counter不应该属于data里面的数据，应该在props里面
import Counter from './components/Counter';
// import CounterBrother from './components/CounterBrother';
export default {
  data () {
    return {
      count: 0
    }
  },
  components: {
    "counter": Counter,
    // 'counter-brother': CounterBrother
  },
  methods: {
  }
}
</script>

<style>

</style>
