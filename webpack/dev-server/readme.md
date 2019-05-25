- nom run 运行在script（脚本）里  各种工作流脚本
  一定要在根目录下
  1. dev 开发时运行的脚本
  2. start 启动服务器的脚本
    和live-server一样
  3. build 开发完成后，一建build 生成上线文件
    压缩过后的

- webpack bundle 打包工具，一切皆可打包
  1. webpack 默认配置在src/index.js  默认打包后在dist/main.js
  2. webpack-cli 命令行工具 
  3. wwebpack-dev-server  会在webpack运行编译的同时启动8080端口将我们的前端开发带入到启动一个 web-server

- 怎么样识别 html templata 
  1. css
  2. js

- resolve里extensions 加后缀
  module 里加 rules : [
    规则
    js -> babel-loader -> preset-env
    css -> style-loader、css-loader
    stylus -> stylus,stylus-loader
  ]

- 一切皆可打包，打包成为可以运行的js
  最后生成的文件，js和CSS最好分家，如果只有一个文件，http请求少，但是不是都好
  现在浏览器可以同时并发多个请求，所以拆成少数几个文件，即js和CSS分离是必须做的
  webpack过中样式的抽离