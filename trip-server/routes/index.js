var express = require('express')
var fs = require('fs')
var router = express.Router()

// 获取对首页的操作
router.get('/', function(req, res, next) {
  // res.statusCode = 200
  // res.setHeader('Content-Type','application/json')
  function readImage(path, res) {
    fs.readFile(path,'binary', function(err, file) {
      if (err) {
        return
      } else {
        res.writeHead(200,{ 'Content-Type':'image/jpeg'})
        res.write(file, 'binary')
        res.end()  // 一定要end 结束
      }
    })
  }
  readImage('/public/images/head.jpeg',res)
})

module.exports = router