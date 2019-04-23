// ali 14.6W 2.6月
// meituan 16 4
//51信用卡 17 5
// S等级 5个月 
// A等级 3个月 
// B等级 2个月 
// C等级 1个月 
// D等级 
//level key 计算函数？


let strategies ={
  'S':function(salary){return salary*5},
  'A':function(salary){return salary*3},
  'B':function(salary){return salary*2},
  'C':function(salary){return salary*1},
  'D':function(salary){return salary}
}

function calculate(level,salary){
  return strategies[level](salary);

  // 分支？
  // if(level === 'S'){
  //   return salary*5
  // }
  // if(level === 'A'){
  //   return salary*3
  // }
  // if(level === 'B'){
  //   return salary*2
  // }
  // if(level === 'C'){
  //   return salary*1
  // }
  // if(level === 'D'){
  //   return salary
  // }


}
console.log(calculate('S',10000))