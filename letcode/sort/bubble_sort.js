function bubbleSort(arr) {
  var len = arr.length;
  var minIndex,temp;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
// 选择排序
const arr = [8,6,10,2,4];
console.log(bubbleSort([8,2,10,5,4,50,9,49,11,51,86,30]))
