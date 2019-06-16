<template>
  <div id="app">
    clicked {{$store.state.count}} times,count is {{eventOrOdd}}
    {{$store.state.count}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
//借
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    eventOrOdd: mapGetters([
      'eventOrOdd'
    ])
    // 如果有多处要用到奇偶判断怎么办 用上面的写法
    // eventOrOdd () {
    //   return this.$store.state.count % 2 === 0 ? 'even':'odd';
    // }
  },
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: block;
}
</style>
