const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry:'./src/index',
  output: {
    path:path.resolve(__dirname,'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname,'src')
        ],
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:[
            'css-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:[
            'css-loader',
            'less-loader'
          ]
        })
      }
    ]
  },

  resolve:{
    extensions: ['.js','.css','.less'],
    modules: [
      path.resolve(__dirname,'node_modules')
    ]
  },

  plugins: [ //插件，专门解决模版的问题
    new HtmlWebpackPlugin({
      filename: 'index.html',//编译后文件的名字
      template: 'src/index.html' //编译前的文件所在的目录
    }),
    new ExtractTextPlugin('[name].css')
  ] 
}