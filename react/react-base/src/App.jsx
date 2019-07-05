import React from 'react';
// import logo from './logo.svg';
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import './App.css';

function renderStr () {
  return 'string'
}

function App() {
  const age = 18;
  const styObj = { color: 'blue'}
  const func = () => { console.log('blue')}
  const bar = () => {
    return function () {
      console.log('bar')
    }
  }
  const lis = [
    <li>1</li>,
    <li>2</li>,
    <li>3</li>
  ]
  const names = [
    'name1','name2','name3'
  ]
  const namesNodes = names.map((name,index) => {
    return (<div style={styObj}>
      { name }
    </div>)
  })
  return (
   <div>
     <Demo1 names={names} from="App" onClick={(a) => {
       console.log(a)
     }} />
     <Demo2 names={names} from="App" />
     <p style={{color:'purple'}} onClick={() =>{
       console.log('purple')
     }}>{ age }</p>
     <p style={styObj} onClick={func}>{ age }</p>
     <p style={{color:'orange'}} onClick={bar()}>{ age }</p>
     {/* 数组能直接展开 */}
     { lis } 
     {/* 如果比较复杂的数组，先map在显示 */}
     {
       names.map((name,index) => {
         return (<div>
           { name }
         </div>)
       })
     }
     { namesNodes }

     { renderStr() }

     { true ? 
      <div>登录</div> :
      <a href="www.baidu.com">百度</a> 
    }
   </div>
  );
}

export default App;
