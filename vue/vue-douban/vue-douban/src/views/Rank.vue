<template>
  <div class="rank">
    <ScrollView :data="movieList">
      <Card v-for="(movie,index) in movieList" :key="movie._id" :movie="movie" :sort="index + 1" @select="selectItem"/>
    </ScrollView>
    <div v-show="!movieList.length" class="loading-wrap">
      <Loading/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rank",
  data() {
    return {
      movieList: [],
      rate: []
    }
  },
  created() {
    this.getMovie()
  },
  methods: {
    getMovie() {
      this.$axios.get('/api/api/movie/get_rank').then(res => {
        console.log(res)
        if (res.code === 1001) {
          this.movieList = res.result.movies
        }
      })
    },
    sortRate(a,b) {
      return a - b
    },
    selectItem(id) {
      // console.log(id)
      this.$router.push(`/movie/${id}`)
    },
  },
}
</script>

<style lang="stylus" scoped>
.rank
  height 100%
  .loading-wrap
    display flex
    align-items center
    height 100%
</style>

