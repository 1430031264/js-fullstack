二分查找   binary_search
  可以帮助我们加速查找
  前提条件是啥？
  有序数组，在使用折半排序，可以将查找的事件复杂度从n 变成log2(n)
  [1,2,10,3,5,7,9].sort()
  [1,2,3,5,7,9,10] 7 

  JavaScript heap out of memory 
    什么会出差错呢？
    1亿左右的大数相加  消耗的是cpu  ？arr[] 里面放了一亿个数，占据物理空间  核心问题在于下标的引用，一亿个下标引用，会出错
    0 - 1亿  for 没有问题  但是引用下标有问题，
    mid = (min + max) /2