function err(msg){
  throw new Error(msg)
}

function sum(a=err('第一个参数为空',),b=err('第二个参数为空')){
  return a + b;
}

//逆向思维
//考察参数默认值的语法点




//实现以下要求
console.log(sum(1,2)) //3
console.log(sum(undefined,10)) //报错 ，第一个参数为空
console.log(sum(10)) //报错，第二个参数为空
// 不允许改写函数体
