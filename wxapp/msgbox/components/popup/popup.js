Component({
  //page 传来的参数    页面传给组件的参数
  properties:{
    //向page要什么
    title:{
      type: String,
      value: '标题',
    },
    content:{
      type: String,
      value: '内容'
    },
    btn_no:{
      type: String,
      value: '取消'
    },
    btn_ok:{
      type: String,
      value: '确定'
    }
  },
  data:{
    flag: false  //显示还是影藏 
  },
  // 一个组件在页面中被调用，
  methods:{
    hidePopup: function() {
      this.setData({
        flag: !this.data.falg
      })
    },
    showPopup(){
      this.setData({
        flag: !this.data.falg
      })
    },
    _error(){
      console.log('ddd');
      this.triggerEvent("error");
    },
    _success(){
      console.log('dddssss');
      this.triggerEvent("success");
    }
  }
})