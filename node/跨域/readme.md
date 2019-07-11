fe 前端
server 后端

## 跨域
  浏览器的安全策略，只有浏览器上才会出现跨域
  同源策略：
    同协议、域名、端口，三者都一样才是同源，
  同源情况不存在跨域，只有不同源的时候才会出现跨域
  

## CORS 
  规定了一组 http 的头部字段，作用是：允许哪些网站通过浏览器有访问的权限

  1. access - X
  2. cookie
  3. 浏览器会先以 OPRIONS 请求方法 发起一个预检请求 (preflight) 获取一下允不允许当前的域请求，服务器允许之后才会发起正式的请求

## 代理
  1. nginx
    反向代理:
      http://localhost:9999/api/
      http://localhost:8888/api/
      不知道请求的是哪个服务器

    正向代理:
      国内访问不了Google，但是我们搭出的服务器(翻墙)这种就属于正向代理
      a -> proxy -> google.com
      b -> proxy -> google.com

## iframe + postMessage
  1. 前端页 通过 iframe 引入一个 后端目录下面的html
    iframe 不受同源策略的限制
  2. postMessage() 用于在两个端口之间传递数据
  3. 前端页面通过postMessage() 向 后端目录下面的html传递接口需要的请求参数
  4. 后端页面通过 postMessage() 向前端页面传递接口结果

## iframe + window.name
  iframe 共享 window.name
  没有 postMessage 只能借助 中间页面 通知 前端页面
  window.parent.print(JSON.parse(window.name))

## jsonp
  1. 定义一个回调
  2. 将回调函数的名字告诉后端 后端会返回
    ```js
    回调(res)
    ```
  3. script 标签 加载过后 执行返回的内容

缺点： 只能发起 get 请求

写一个 jsonp 的函数，以promise 的方式调用 
```js
json(url)
.then(res => {

})
```