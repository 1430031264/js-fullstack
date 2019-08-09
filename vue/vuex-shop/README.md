# 技能思路
  - 购物车
  goods -> goodsItem
  共享数据：库存 -> 购物车
  - 组件让我们从容的进行页面划分
    
  - vuex 中 
    data 私有数据，不适合放共享数据，跨组件不会用这个
    props 小范围父子组件传递参数，但是events bus 不如 vuex
    computed 是 vuex 进行数据从中央到地方的对接点

  - 
    store  modules( products.all ) []
    mapState({ products: state => state.products.all })

    如何搞定这个all?
    all <- mutation <- action axios 请求(后端api)
    modules state.products.all
    dispatch('products/getAllProducts') -> action -> api ->mutation -> state -> mvvm -> 界面  这就是vuex的开发套路

    如果在methods 里面引入 则要 使用 mapActions
    this.$store.dispatch()