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

export const playerMixin = {
  computed: {
    ...mapGetters([
      'playList',
      'currentSong',
      'currentIndex',
      'favoriteList'
    ]),
    favoriteIcon () {
      return this.getFavoriteIcon(this.currentSong)
    }
  },
  methods: {
    toggleFavorite (song) {
      if (this.isFavorite(song)) {
        this.deleteFavoriteList(song)
      } else {
        this.saveFavoriteList(song)
      }
    },
    getfavoriteIcon (song) {
      if (this.isFavorite(song)) {
        return 'icon-favorite'
      } else {
        return 'icon-not-favorite'
      }
    },
    isFavorite (song) {
      const index = this.favoriteList.findIndex((item) => {
        return item.id === song.id
      })
      return index > -1
    },
    //可以用这种方法 直接调用方法，不需要在mutations里面先调用
    ...mapMutations({
      setPlaylist: 'SET_PLAYLIST',
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setPlaying: 'SET_PLAYING'
    }),
    ...mapActions([
      'saveFavotiteList'
    ])
  }
}