// var twoSum = function(nums, target) {
//   for(let i = 0; i < nums.length; i++) {
//     let cur = nums[i]
//     for j  cur
//     for(let j = i + 1; j < nums.length; j++) {
//       let cur2 = nums[j]
//       if(cur + cur2 === target) {
//         return [i,j]
//       }
//     }
//     // const index = nums.lastIndexOf(item => item === target - cur)
//     // if(index > 0){
//     //   return [i,index]
//     // }
//   }
// };
// console.log(twoSum([3,3],6))

// var map = {
//   'lilei': '李雷',
//   'lihua': '李华'
// }
// function lilefun() {
//   console.log('我在玩')
// }
// function lihuasleep() {
//   console.log('我在睡觉')
// }
// // 优化 IF else
// var userNameMap = {
//   'lilei': lilefun,
//   'lihua': lihuasleep
// }
// function dosomething(username) {
//   // if(username === 'lilei') {
//   //   lilefun();
//   // } else if (username === 'lihua') {
//   //   lihuasleep();
//   // }
//   if(userNameMap[username]) {
//     userNameMap[username]()
//   }
// }
// // let map1 = new Map()
// dosomething('lilei')
// dosomething('lihua')

// var numsMap = {
//   '2': 0,
//   '7': 1,
//   '11': 2,
//   '15': 3
// }
// numsMap[9]
// target 9

var twoSum = function(nums, target) {
  // 给所有的数建立 map
  var obj = {}
  for(let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i
  }
  for(let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    let anothernum = target - cur
    if(obj[anothernum] !== undefined && obj[anothernum] !== i) {
      return [i,obj[anothernum]]
    }
  }
}
console.log(twoSum([3,2,4],6))
