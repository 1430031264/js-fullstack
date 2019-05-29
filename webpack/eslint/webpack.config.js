const path = require('path')
module.exports ={
  entry: './src/index',
  output: {
    path: path.resolve(__dirname,'dist'),//可以返回项目所在的物理路径
    filename:'[name].js',
  },
  module: {
    rules: [
      {
        enforce:'pre',
        test: /\.jsx?$/,
        exclude:/node_modules/,
        loader: "eslint-loader"
      },
      {
        test:/\.jsx?$/,// ?重复零次或一次  +重复一次或更多次  *重复零次或更多次
        include: [
          path.resolve(__dirname,'src')
        ],
        use: 'babel-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname,'node_modules')
    ]
  }
}