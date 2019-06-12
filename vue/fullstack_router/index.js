const http = require('http');
const fs = require('fs');

//现在后端开发基本都是开发/api 或者启动服务里面的内容 /api/shops  /
http.createServer(function ( req,res) {
  var filepath = '.' + req.url;
  if(filepath === './') {
    filepath = './index.html';
  }
  readFile(filepath,res);
}).listen(3000)

function readFile(path,res) {
  fs.readFile(path,'utf-8',function(err,data){
    if(err){
      readFile('./index.html',res);
    } else {
      res.write(data);
      res.end();
    }
  })
}