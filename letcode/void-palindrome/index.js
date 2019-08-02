// 问一个字符串是不是回文 简单版，不支持大小写

//-------------方法一 ----------------
      // 简陋版 法一 
// function fanzhuan(str){
//   var newStr = str.split('').reverse().join('')
//   if (newStr === str) {
//     return true
//   } else {
//     return false
//   }
// }
      // 精炼版 法一
// function fanzhuan(str) {
//   if (!str || typeof str != 'string') return '输入的不是字符串'
//   return str.split('').reverse().join('') === str
// }

// 进阶问题 A man, a plan, a canal: Panama 判断这种样子的字符串是否为回文
// 能判断1. 忽略大小写 2. 空、特殊符号 忽略
var isValidChar = (c) => { // abc  123
  return /^[\w]$/.test(c);
}
var isPalindrome = function(s) {
  s = s.toLowerCase(); // 变小写
  let left = 0,
      right = s.length - 1;

  while(left < right) {
    if (!isValidChar(s[left])) {
      left ++;
      continue
    }
    if (!isValidChar(s[right])) {
      right--;
      continue
    }
    if (s[left] = s[right]) {
      left++;
      right--;
    } else {
      break;
    }
  }
  return right <= left
};
console.log(isPalindrome('A man, a plan, a canal: Panama'))
