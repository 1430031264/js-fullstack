- json 格式是标准的数据交换 
- 前后端开发 /api  就是以json格式来交流
- 全栈 fullstack

- restful 一切皆资源 暴露资源 有一个规则
- 设计良好的 URL 
  /posts
  /posts/:id
  /comments
  /comments/:id
  /posts/i/comments
HTTP 动词 
我们通过get 来查询
如果我们想添加一条评论 如何设计 ? 
增加一个资源 就一定要向某一个URL请求一个资源 
使用post  新增  /comments
delete  删除  /posts/2
put/patch  修改  /comments/2 body 改为：最美不过下雨天，是与你..
  put 把全新的内容替换掉旧的内容，修改的是全部
  patch 更新一条记录，只要转递一个要更新的字段，修改的局部

- restful 考点
  任务一切皆资源，URL是唯一定位资源的符号，他有一定的设计原则
  http动词 是web资源的状态转换动词

  操作        SQL方法       HTTP动词
  create      insert        post
  read        select        get
  update      update        put/patch
  delete      delete        delete

