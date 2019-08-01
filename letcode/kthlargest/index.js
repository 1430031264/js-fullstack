// 问 给一个乱序数组，如何找出第 k 大的值

// -----------方法一--------------
// var arr = [8,6,1,2,9,10,4,5]
// function chooseNum(nums,k) {
//   if(k < 0 || k > nums.length -1) return NaN
//   return nums.sort((a,b) => b - a)[k - 1]
// }
// console.log(chooseNum([8,6,1,2,9,10,4,5],2))
// 这种排序方式 很费时间，事件复杂度是 O(n^2) 费时间

// 如果要求实现时间复杂度为 O(nlog2(n)) 的排序 使用快排

// -----------------方法二------------------------
function findKLargest(nums,k) {
  const arr = quick_sort(nums)
  return arr[k -1]
}

function quick_sort(arr) {
  if (arr.length <= 1) return arr
  var left = [],
      right = [],
      baseDet = Math.round(arr.length / 2) // 找到中间的下标
      base = arr.splice(baseDet,1)[0]; // 找到中间的那个数
  for(var i = 0; i < arr.length; i++) {// O(n)
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
  }
  return quick_sort(left).concat([base],quick_sort(right)) // 递归 先写
}

console.log(findKLargest([8,6,1,2,9,10,4,5],2))
