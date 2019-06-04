const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next) => {
  const start = Date.now();
  await next();
  const end = Date.now();
  //writeHead() 设置响应头 content-type
  ctx.set('X-Response-time',`${end - start}ms`);//自己定义了一个X-Response-time的响应头
  console.log('spend',`${end - start}ms`)
})

app.use(async (ctx) => {
  ctx.body = `hello koa`;
})

app.listen(8080,() => {
  console.log('server is running 8080')
})