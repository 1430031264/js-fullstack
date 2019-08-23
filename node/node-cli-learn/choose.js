const inquirer = require('inquirer')

inquirer.prompt([{
  type: 'input',
  name: 'age',
  message: '请输入年龄：',
  default: 18,
  choices: [10,20,30,40,50]
},{
  type: 'list',
  name: 'css',
  message: '使用什么CSS预处理',
  choices: [
    {name: 'less',value:'less-less',short:'less-short'},
    {name: 'sass',value: 'sass-sass',short:'sass-short'},
    {name: 'stylus',value: 'stylus-stylus',short:'stylus-short'}]
}])
.then(res => {
  console.log(res)
})