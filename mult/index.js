// function mult (){
//   // 参数数量是不定的
//   let a = 1;
//   for(var i = 0, l = arguments.length;i < l;i++){
//     a = a * arguments[i];
//   }
//   return a;
// }

// 第二种写法 es6 写法
// function mult (...args){
//   let a = 1;
//   for(var i = 0, l = args.length;i < l;i++){
//     a = a * arguments[i];
//   }
//   return a;
// }
// console.log(mult(2,2,3));
// console.log(mult(2,2,3));
// console.log(mult(2,2,3));

// 这个要每次都做一个乘法运算，不好,我们想既然它已经算过一次了，我们就不用每次都算了
// 能不能在内存中存下来，等到下次执行同样的代码的时候能直接个输出出来

// 缓存计算结果，不要重复计算，就意味着计算了的。我们要保存，存在哪？ 方式？用什么样的数据结构能实现这个功能 --json
let cache = {};
//1,2,3  4,5,6
// key string  <= arguments 类数组 我们要将一个类数组变成string
function mult (){
  let a = 1;
  let key = Array.prototype.join.call(arguments,','); //用，号隔开，形成唯一的key
  // args相关，数组 => string 的key是什么？
  // [2,2,3]  "223" 有问题，22*3 就不行了 “1,2,3” 这样就不歧义了
  if(cache[key] ){
    console.log('从缓存中取');
    return cache[key];//曾计算过，就不用算了  直接return
  }

  for(var i = 0, l = arguments.length;i < l;i++){
    a = a * arguments[i];
  }
  cache[key] = a ;
  return a;
}
console.log(mult(2,2,3));
console.log(mult(2,2,3));
console.log(mult(2,2,3));