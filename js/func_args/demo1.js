function information(name,sex,money,birthday,color,likes,follow,age) {
  return `${name} ${sex} ${money} ${birthday} ${color} ${likes} ${follow} ${age}`
}

let user = {name:'金轮',sex:'男',money:'负债1个亿',birthday:'5.12',color:'green',likes:['LOL'],follow:'自己',age:'21'};

// let name = name;
information(user)