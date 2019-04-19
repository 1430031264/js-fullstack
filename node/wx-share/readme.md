传统的MVC后端开发

- MVVM 
    Model  Page({data:{}})
    View  Templete wxml
    VM  {{}} wx:for

- MVC
    Model 数据库
    View 静态页面
    Controller

    web HTTP服务器  live-server 构建了一个静态Web服务器
  
  端口是啥？ 3000 电脑有很多端口，每个端口提供不同的服务
  Mysql 3306
  Webserver 80
  用户 request 通过 IP + 端口 
  Webserver提供的是response

  http.createServer(function(request,response){
    request n个用户
    response 
  }) 创建一个Webserver 
  http.listen(8080) 在8080端口启动服务
