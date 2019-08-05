# script 的执行
分为两步：
  - 下载
  - 执行
1. 当script 标签什么都不加的时候，js 下载、执行 和 html解析(html parse) 的渲染一定都是互斥的
2. script 只要加了任何属性，就可以并行 js 下载、执行 和 html解析
- async
  1. html parse / 下载并行
  2. 下载完成就执行，顺序无法控制
- defer
  1. html parse / 下载 并行
  2. 整个文档加载完成后，按照 script 在文档中出现的顺序执行
区别：
  defer 执行是在整个html 解析完了之后才执行，顺序是整个html 出现的顺序,如下代码，1的script 标签一定在 2 的 script 前面执行
  ```html
  <script defer>1</script>
    <div></div>
  <script defer>2</script>
  ```
  async 没有顺序

## crossorigin
用于可以跨域资源的标签，如 img、link、script等 标签不受同源策略限制，都能引进来
crossorigin 代表要协商跨域
后端没设置 Access-control-* 就会出错。
1. anonymous
  如果使用了这个值，会在请求头中加一个 origin 属性
2. use-credentials
  请求的时候带上 cookie 等用户验证的信息
  
  如果为设置 cros， 跨域js 发生了错误，将会想 window.onerror 提供很少的信息，通过crossorigin 属性 得到详细的信息