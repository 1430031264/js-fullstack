<template>
  <div class="recommend">
    <!-- 首页整个页面都支持better-scroll滚动 -->
    <ScrollView>
      <ListBlock :movies="playingMovies" :title="`正在热映(${playingCount})`"></ListBlock>
    </ScrollView>
  </div>
</template>

<script>
import axios from 'axios'
import ListBlock from '@/components/ListBlock/ListBlock'
export default {
  data() {
    return {
      playingMovies: [],
      playingCount: 0,
    }
  },
  components: {
    ListBlock
  },
  created() {
    this.getMovie()
  },
  methods: {
    getMovie() {
      axios.get('https://www.easy-mock.com/mock/5d51253b75c1d55dd9aeca58/vue-douban/douban-movie').then(res => {
        console.log(res)
        if(res.data.code == 1001) {
          const { comming,playing } = res.data.result
          this.playingMovies = playing.movies
          this.playingCount = playing.count
        }
      })
    },
  },
  
}
</script>

<style>

</style>
