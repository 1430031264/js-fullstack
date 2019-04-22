// 这里违反的原则 -- 全局变量太多，cache只为mult服务，空间污染
// const cache = {};
// var mult = () => {
  
// }

//  如果写成局部变量，函数是里面的变量运行后就消失
// var mult = () => {
//   const cache = {};
// }

// 闭包
var mult = (function(){
  const cache = {};
  return function(...args){
    let key = Array.prototype.join.call(args,',')
    if(key in cache){
      return cache[key];
    }
    let a= 1;
    for (let i = 0,l=args.length;i < l;i++){
      a = a * args[i];
    }
    cache[key] = a;
    return a;
  }
})()

console.log(mult(1,2,3));