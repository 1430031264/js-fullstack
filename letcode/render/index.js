function render(tpl, data) {
  // 1. 找到所有的{{}} regExp /\{\{(.+)\}\}/g 
  // .表示除\n之外的任意字符
  // *表示匹配0-无穷
  // +表示匹配1-无穷
  return tpl.replace(/\{\{(.+?)\}\}/g,function($1,$2) {
    console.log($1,$2)
    return data[$2]
  })
}

let tmpl = 
`
<div>
  <p>{{name}}</p>
  <p>{{age}}</p>
</div>
`

console.log(render(tmpl,{name: '张三丰', age: '200'}))