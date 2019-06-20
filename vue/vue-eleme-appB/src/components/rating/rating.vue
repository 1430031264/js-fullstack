<template>
<div class="comments">
  <div class="comment">
    <div class="com-left">
      <div class="score">4.2</div>
      <span ave-score>综合评分</span>
      <span more-than>高于周边商家69.2%</span>
    </div>
    <div class="com-right">
      <div class="Service-Att">
        <span>服务态度</span>
      </div>
      <div class="goods-com">
        <span>商家评分</span>
      </div>
      <div class="arrive-time">
        <span>送达时间</span>
        38分钟
      </div>
    </div>
  </div>
</div> 
</template>

<script>
export default {
  name: 'Ratings',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
.comments
  height 120px
  width 100%
  .comment
    display inline-block
    padding 20px 22px 18px 16px
    width 100%
    .com-left
      height 100%
      width 140px
</style>
