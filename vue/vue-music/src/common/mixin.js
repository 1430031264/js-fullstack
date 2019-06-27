import { mapGetters,mapMutations,mapActions } from 'vuex';

export const searchMixin = {
  data () {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods: {
    onQueryChange (query) {
      // console.log(query)
      this.query = query.trim()
    },
    blurInput () {
      this.$refs.searchBox.blur()
    },
    addQuery (query) {
      this.$refs.searchBox.setQuery(query)
    }, 
    saveSearch (song) {
      console.log(song)
      this.selectPlaySong(song)
      // this.$store.dispatch('saveSearchHistory',this.query) 调用actions里面的方法
      //另一种调用actions里面方法的方法，用mapActions
      this.saveSearchHistory(this.query)
    },
    ...mapActions([
      'saveSearchHistory',
      'selectPlaySong'
    ])
  }
}