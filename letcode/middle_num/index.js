// function MerageArray(arr1,arr2) {
//   let res = []
//   for(let i = 0; i < arr1.length;i++) {
//     for(let j =0; j < arr2.length; j++) {
//       if(arr1[i] < arr2[j]) {
//         res.push(arr1[i])
//       } else {
//         res.push(arr2[j])
//       }
//     }
//     return res
//   }
// }
function MerageArray(arr1,arr2) {
  let res = [],i =0,j = 0;
  while(i < arr1.length && j < arr2.length) {
    while(i < arr1.length && arr1[i] <= arr2[j]) {
      res.push(arr1[i])
      i++
    }
    while(j < arr2.length && arr2[j] <= arr1[i]) {
      res.push(arr2[j])
      j++
    }
  }
  if(i === arr1.length) {
    res.push(...arr2.splice(i))
  }
  if(j === arr2.length) {
    res.push(...arr2.splice(j))
  }
  return res
}

var findMedianSortedArrays = function(nums1, nums2) {
  let newArray = MerageArray(nums1,nums2)
  let total = nums1.length + nums2.length
  var t = Math.floor(total / 2)
  if(total % 2 === 0) {
    return (newArray[t - 1] + newArray[t + 1]) / 2
  } else {
    return newArray[t]
  }
};

console.log(findMedianSortedArrays([1,3,5,7,9],[2,4,6,8]))