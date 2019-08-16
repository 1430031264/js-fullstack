var longestCommonPrefix = function(strs) {
  let arr = []
  let result = ""
  for(let i = 0; i < strs.length; i++){
    arr.push(strs[i].length)
  }
  arr.sort((a, b) => a - b)
  for(let j = 0; j < arr[0]; j++){
      let s = strs[0][j]
      if(strs.every(val => val[j] == s)){
          result += s
      }else{
          break
      }
  }
  return result
};
console.log(longestCommonPrefix(["flower","flow","flight"]))
