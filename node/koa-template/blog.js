const Koa = require('koa');
//支持哪些模版引擎
const views = require('koa-views');
const ejs = require('ejs');
const path = require('path')
const app = new Koa();

const user = {
  name: 'YJJ',
  posts: [
    {
      id: 0,
      title: '电竞少年'
    },
    {
      id: 1,
      title: '电竞少女'
    }
  ]
}

const postsDetail = [
  {
    id: 0,
    content: '男'
  },
  {
    id: 1,
    content: '<strong>女</strong>'
  }
]

app.use(
  views(path.join(__dirname, './views'), {
    extension: 'ejs'
  })
)

//  /user 个人主页面
// /posts 文章详情
app.use(async (ctx) => {
  //区分 页面
  // console.log(ctx.path); 
  if (ctx.path === '/user') {
    //选择user.ejs这个模版，往里面定义数据
    await ctx.render('user', { user });//渲染
  } else if (ctx.path === '/posts') {
    const { id } = ctx.query
    const post = postsDetail.find(postItem => postItem.id == id);
    await ctx.render('post',{ post });
  } else {
    ctx.body = `无法处理该请求`
  }
})

app.listen(8080, () => {
  console.log('server is running 8080')
})