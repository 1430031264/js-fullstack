const isCommonPrefix = (strs,middle) => {
  const prefix = strs[0].substring(0, middle)
  for(let i = 1; i< strs.length; i++) {
    //  startsWith() 方法用来判断当前字符串是否以另外一个给定的子字符串开头,并根据判断结果返回 true 或 false
    if(!strs[i].startsWith(prefix)) return false
  }
  return true
}
const longestCommonPrefix = function(strs) {
  let minLen = Number.MAX_VALUE;
  if(strs.length === 0) return ''
  if(strs.length === 1) return strs[0]
  for(let i = 0; i < strs.length; i++) {
    minLen = Math.min(minLen,strs[i].length)
    // if(strs[i].length < minLen) {
    //     minLen = strs[i].length
    // }
  }
  // console.log(minLen)
  // 二分
  let low = 0,
    high = minLen;
  while(low <= high) {
    const middle = (low + high) >> 1
    if(isCommonPrefix(strs,middle)){
      low = middle + 1
    } else {
      high = middle - 1
    }
  }
  // substring(start,stop) 方法用于提取字符串中介于两个指定下标之间的字符。
  // 从start开始，到stop前一个，即返回的子串包括 start 处的字符，但不包括 stop 处的字符。
  return strs[0].substring(0, (low + high) >> 1)
}

console.log(longestCommonPrefix(["flower","flow","flight"]))