##响应头
  Content-Type:告诉浏览器返回的内容是什么类型的，知道什么类型之后就会区别对待
  类型:mine 
    text/plain  纯文本   
    text/html   html页面
    类型后面加上;Charset=utf-8,可以是数据编码变成UTF-8的格式

## 解析url的时候
  get请求参数拼到了 ? 后面,并且用一个 & 链接
  url parse() query 
  querystring parse() 

## writeHead 写响应信息
## createServer 创建一个http服务