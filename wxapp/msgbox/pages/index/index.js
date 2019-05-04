Page({
  onLoad: function(){
    this.popup = this.selectComponent('#popup');
  },
  showPopup: function() {
    // 弹窗
    this.popup.showPopup();
  },
  _error(){
    console.log('-------');
    this.popup.hidePopup();
  },
  _success(){
    console.log('******');
    this.popup.hidePopup();
  }
})