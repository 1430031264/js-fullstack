## react
  "react": "^16.8.6",
  "react-dom": "^16.8.6"

  用于构建用户界面的JavaScript库
  react: 负责 UI，用户看到的，规定了组件写法，公用的包

  react-dom：负责组件渲染到浏览器上
  react-native: 负责将组件渲染到手机上

  ```js 
  ReactDOM.render(<App />, document.getElementById('root')); 
  ```
  这句话很重要，目的是吧app组件挂载到#root下面

## jsx
  js + html 可以理解为vue里面的template

  所有的变量都用 { }

## 组件
  function App() { return }  function component
  class  class component

  父传值给子 父：<Demo1 names={names} from="App" />
        Demo1组件(用class定义的组件)：用this.props 接收
        Demo2组件(用function定义的组件)：在function的参数里面用props