// live-server
{/* <script src="./fs.js"></script> */ }
// require 进来 是一个关键字，按需加载  COMMONJS 模块化方案
const http = require('http');
const https = require('https')
let i = 0;
http
  .createServer(function (request, response) {
    i++;
    response.end(`hello world ${i}`)
    
    console.log(i)
  })//创建一个软服务
  .listen(3000);
// web 服务在软件上理解就是一个http访问的服务C