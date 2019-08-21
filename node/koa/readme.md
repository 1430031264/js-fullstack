- sql
  create insert delete update 
  select * from t-user where is_delete=1; // 作用于所有数据
  select * from t-user where id=123 // 作用于 123 那条数据
  索引作用：更快的找到需要的数据，精准查询到，不用作用于所有数据
  primary key 主键 auto-increment
  unique key 唯一索引 防止重复
  数据类型 
    int(11)
    varchar(20)
    tinyint(1)
    datetime
  存储类型 innoDB  memory(投票、竞价这种不用长期存储或者需要经过一定过程的数据)

- http 的理解
  中间件：
  分层:
  view
  controller
