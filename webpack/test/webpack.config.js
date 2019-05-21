// 打包配置
//如果没有这个文件，默认配置
// src/开发目录
// dist/ 默认打包目录
// src/index.js 默认入口
const path = require('path')
module.exports ={
  entry:'./src/index',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'
  },
  module:{
    // babel,
    rules:[
      {
        test:/\.js$/,
        include:[
          path.resolve(__dirname,'src') //加这个是为了让它之编译src里面的js文件，不加会吧node_modules里面的文件也编译，不需要且费时

        ],
        use:'babel-loader'
      }
    ]
    // stylus,
    // 静态资源
  },
  resolve:{
    extensions:['.js']
  }
}