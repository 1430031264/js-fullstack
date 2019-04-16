//位移运算（右移）  /2的效果
//二进制位 0000 1011  右移后 0000 0101
// console.log(11 >> 1);

// 左移  *2的效果
//二进制位 0000 1011  左移后 0001 0110
// console.log(11 << 1);

// 利用位移运算，/2 *2的效果

// 猛哥给蜗牛卖香蕉
// N piles of bananas 每挂香蕉上的数量不一样
// [3,6,7,11], H 小时内吃完 一个小时吃几根  一小时内吃min根香蕉，一次只能吃一把，一小时最少吃几根，能在H小时吃完

/**
 * @desc z最少吃香蕉的速度，在规定时间内吃完
 * @param {number[]} plies 
 * @param {number} H 
 * @return {number}
 */
function minEatingSpeed (piles,H){
  let lo = 1;
  hi = Math.max(...piles);
  //二分查找，一直丢一半
  while(lo <= hi){
    // lo++;
    // let mid = lo + ((hi-lo) >> 1);
    let mid = (lo + hi) >> 1;
    if(canEatAllBnnanas(piles,H,mid)){
      hi = mid - 1;
    }else {
      //没有吃完  小的一半值没有意义了 
      lo = mid +1;
    }
  }
  return lo;
}

/**
 * @desc 判断能否吃完香蕉
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 */
function canEatAllBnnanas(piles,H,mid){
  let h = 0;
  // mid,余下吃完
  for(let pile of piles){
    h += Math.ceil(pile/mid);/*向上取整 */
  }
  return h <= H;
}
let piles = [3,7,9,11];
console.log(minEatingSpeed(piles,5));
//- 吃完香蕉是我们的目标  
  // H 小时内吃完

//- 最小的一个数

