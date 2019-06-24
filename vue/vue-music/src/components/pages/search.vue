<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- 搜索框 -->
      <searchBox></searchBox>
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
      <!-- 热门搜索 --> 
      <v-scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item,index) in hotKey" :key="index" @click="addQuery(item,first)">
                <span>{{item.first}}</span>
              </li>
            </ul>
          </div>
        </div>
      </v-scroll>

    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from '@/components/scroll'
export default {
  name: 'search',
  data () {
    return {
      query: false,
      shortcut: [],
      hotKey: [
        {first:'许山高新歌发布'},
        {first:'许山高'},
        {first:'周杰伦新歌发布'},
        {first:'张杰'},
        {first:'林俊杰新歌发布'},
        {first:'邓紫棋新歌'},
        {first:'阿黛尔'},
      ]
    }   
  },
  components: {
    'searchBox': searchBox,
    'v-scroll': scroll
  }
}
</script>

<style>

</style>
