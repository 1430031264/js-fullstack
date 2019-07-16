//  createStore 可以创建store里面的数据
const { createStore, combineReducers } = require('redux');
//  action.type 常量 决定了这次 dispatch 要干什么
// reducer 可以收到 action 的信息

const add = {
  type: 'INCREMENT'
}
const reduce = {
  type: 'DECREMENT'
}

function reducer(state,action) {
  console.log('rerucer->>>>>  ',action)
  if( action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  } else {
    return 0;
  }
  // console.log('reducer触发了') 
}
// 加 ADD_FILM
// actions 由 type + payload 组合而成 type 一定要有 type之外的字段都是 payload
function filmReducer(state = [],action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [...state, action.film];
    default :
      return state;
  }
}
//如果有多个reducer的话，就先组合在把组合过后的 reducer 传入 createStore
const index = combineReducers({
  count: reducer,
  films:filmReducer
})

// createStore 只能接受 reducer 本质是这个  或许能传些不一样的东西，但是最后一定会转化为reducer
// createStore 的时候 就会触发一次reducer 后面每dispatch一个就触发一次reducer
const store = createStore(index);
// getState 里面的值就是reducer(state) 里面的state
// console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(add)
store.dispatch(add)
// console.log('111+',store.getState())
store.dispatch(reduce)
// console.log('222+',store.getState())
store.dispatch({
  type: 'ADD_FILM',
  a: 1,
  b: 2,
  id: 0,
  film: {name: '蜘蛛侠：英雄远征'}
})
