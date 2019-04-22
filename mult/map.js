// 这是一个对象， 林 gaodeMap
const googleMap = {
  show() {
    console.log('开始渲染谷歌地图');
  }
}
const baiduMap = {
  // 用同样的方法为不同的对象互换做准备，这就是接口
  show() {
    console.log('开始渲染百度地图');
  }
}
const gaodeMap = {
  show(){
    console.log('开始渲染高德地图');
  }
}


/**
 * 
 * @param {object} map 
 */
// 方法一
// const renderMap = (map) => {
//   // map 检测
//   if(map.show && typeof map.show === 'function'){
//     map.show();
//   }
// }
// 方法二
const renderMap = (map) => {
  // map 检测
  if(map.show && map.show instanceof Function){
    map.show();
  }
 
}


renderMap(baiduMap);
renderMap(googleMap);

/*// 如何在只改动renderMap 来实现谷歌 百度都能调用show
const renderMap = (type) => {
  // googleMap.show();
  // googleMap.show();
  // gaodeMap.show();//这种也能实现，但是需要手动的改动代码，不方便

  // 这种方法分支太多，如何干掉分支
  if (type === 'baidu')
    baiduMap.show();
  else if(type === 'google')
    googleMap.show();
  else if(type === 'gaode')
    gaodeMap.show();
}

renderMap('baidu');
renderMap('google');
*/


