/*快排、
抽象  a b(女神) c  一次就搞定
n个数？ 
[8,2,7(女神),5,4]
递归 */

function quickSort (arr) {
  /* 
    left a
    base 中间值
    right b
  */
  if(arr.length <= 1) { return arr;}
  var left = [],
      right = [],
      baseDot = Math.round(arr.length / 2),
      base = arr.splice(baseDot,1)[0];
  //找到中间值
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([base],quickSort(right))
}

console.log(quickSort([8,2,7,9,4,40,1,18,25,15]))