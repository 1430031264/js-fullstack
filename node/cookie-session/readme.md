## why
  无状态 

## cookie

  本地存储
  怎么来的？


  1. js如何操作cookie的 document.cookie 可读 可写
  2. 服务端通过 Set-Cookie 响应头设置 cookie

内容：
  name: --cookie的名字
  value:  --cookie的值
  path: --cookie的路径  在哪个路径下生效

  /               /就是所有路径
  /user           /user  user以及user下面的所有路径
  /user/abc       /user/abc user/abc以及下面的

  domain:
  
  httpOnly: true/false 如果设置为 true，就不能通过 js 获取 cookie 的值
  maxAge: 在几秒后 cookie 被删除。koa：里面时间的单位为ms  js:单位为s
  secure: 安全只会在 https 协议下传播

作用范围：
  domain + path
  在什么域名什么路径下面生效
  浏览器检查春初的 cookie，会发送给服务端的，而且：http 传输报文的大小

用途:
状态管理，t
用户个性化设置，f
这些设置可以保存到 cookie 里面
规定死了

## session
会话
没什么规定，靠后台自己实现的
很多个用户产生很多个 session

userId
sessionID用户会话的时候， 通过自己的sessionID查询自己的状态
cookie: sessionID = id