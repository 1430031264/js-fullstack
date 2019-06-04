## koa 中间件  middleWare
app.use(middleWare);
next 下一个中间件。
每一次 use 都会注册一个中间件
[middleWare1,middleWare2]
1. async 函数
2. 洋葱模型：一层层网最里面执行，最后一个中间件执行完了，一层一层往外冒泡执行剩余的代码。
3. 解耦：每一个中间件负责一件事

以 X 开头的都是自定义响应头

#koa 第三方中间件
koa中的ctx 就是req + res 组成的对象
ctx:{
  req: {},
  res: {}
}
用了 koa-views 这个第三方中间件后
ctx: {
  req: {},
  res: {},
  render: () => {}
}
接着扩展 ctx ,接着往ctx 里面塞东西

##
package.json  项目描述
一个node项目有依赖：npm install 下来的文件。
-S  生产者模式
```json
"dependencies": {
    "ejs": "^2.6.1",
    "koa": "^2.7.0",
    "koa-views": "^6.2.0"
  }
``` 
npm i node_modules 目录。
koa  压缩 -> 20  后 500M
不把 node_modules 放在压缩目录里面 5m ->
执行 npm i 从package.json 文件里面读取依赖安装
如果忘记-S 少一个依赖

-D 是开发者模式
```json
"devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.7.0",
    "webpack": "^4.32.2",
    "webpack-cli": "^3.3.2",
    "webpack-dev-server": "^3.4.1"
  },
```

## ejs
<%= %>  原样输出
<%- %>  解析 html
<% %> 解析 JS