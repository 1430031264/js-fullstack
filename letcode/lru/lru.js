// 什么叫缓存？不用每次都去硬盘里找，在内存中缓存

var LRUCache = function(capacity){
  this.capacity = capacity;
  this.obj = {}; //key 
  this.arr = [];
}

LRUCache.prototype.get = function(key){
  // 有 返回值  设置为最近使用

  //没有  返回-1
  var val = this.obj[key];
  // 容量不大的内存服务于最多的进程
  if(val > 0){
    var index = this.arr.indexOf(key);
    this.arr.splice(index,1);
    this.arr.unshift(key);
  }else{
    return -1;
  }
}

LRUCache.prototype.set = function(key,value){
  if(this.obj[key]){
    this.obj[key] = value;//更新的，这个就变成了最近使用，去到数组的[0]
    //如何删除之前的？
    var index = this.arr.indexOf(key);//返回某个指定的字符串值在字符串中首次出现的位置
    this.arr.splice(index,1);//用于添加或删除数组中的元素,从index位置开始，删除1个元素
    this.arr.unshift(key);//向数组的开头添加一个或更多元素,并返回新的长度
  }
  // 如果有key ,就返回，
  if(this.capacity === this.arr.length){
    //放满了
    var k = this.arr.pop();//删掉队尾的最近最少使用的那个元素
    this.obj[k] = undefined;//将队尾的那个元素的key设置为未定义，就找不到了

  }
  this.obj[key] = value;
  this.arr.unshift(key);
  // 如果没有的话，有两种可能，存进去，存进去arr里面 ,存进去之前我们要判断一下
  // 1 如果内存满了，arr.pop() 
}