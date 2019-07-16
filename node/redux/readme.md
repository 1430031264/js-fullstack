## redux 数据流
  全局的数据
  action   一个纯对象 { } 
  reducer   纯函数 函数的返回值决定了 store 里面的变量 纯函数只依赖于入参(state，action)，里面的计算只依赖于这两个值，不依赖与其他的， 而且会返回一份【新】的数据，不能在原来的数据上修改
  dispatch  dispatch(action) 修改数据/状态 只有这个能修改store里面的数据
  store  状态的集合