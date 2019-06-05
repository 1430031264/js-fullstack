/**
 * 管理 router
 */
const Router = require('koa-router');
const router = new Router();

router.get('/user',async (ctx) => {
  await ctx.render('user', { user });
})
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
router.get('/posts',async (ctx) => {
  const { id } = ctx.query
  const post = postsDetail.find(postItem => postItem.id == id);
  await ctx.render('post',{ post });
})
//浏览器地址栏访问的路由
router.get('/create',async (ctx) => {
  await ctx.render('create')
})
//submit method= 'post'
router.post('/create',async (ctx) => {
  console.log(ctx.request.body);
  const { title, content } = ctx.request.body;
  let id = Date.now();
  user.posts.push({
    id,
    title
  })
  postsDetail.push({
    id,
    content
  })
  ctx.redirect('/user');
})



module.exports = router;