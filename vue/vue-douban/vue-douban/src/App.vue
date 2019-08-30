<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 头部 -->
    <TheHeader />
    <div class="content">
      <!-- <keep-alive> -->
        <router-view />
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style lang="stylus" scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.content 
  position absolute
  top 56px
  bottom 0
  width 100%
</style>
