// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';

// class Hello extends React.Component {
//   constructor(props) {
//     // 执行父类构造函数，成为一个组件
//     super(props);
//     this.state = {
//       opacity: 1.0
//     }
//   }
//   componentDidMount () {
//     this.timer = setInterval(function() {
//       var opacity = this.state.opacity
//       // var{ opacity } = this.state.opacity
//       opacity -= 0.05
//       if(opacity < 0.1) {
//         opacity = 1.0
//       }
//       this.setState({
//         opacity: opacity
//       })
//     }.bind(this),100)
//   }
//   render() {
//     return (
//       <div style={{opacity: this.state.opacity}}>
//         Hello {this.props.name}
//       </div>
//     )
//   }
// }
// class UserGist extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       username: '',
//       lastGistUrl: ''
//     }
//   }
//   componentDidMount () {
//     const { source } = this.props
//     fetch(source)
//     .then(data => data.json())
//     .then(data => {
//       console.log(data)
//       // let username = result
//       let lastGist = data[0]
//       this.setState({
//         username: lastGist.owner.login,
//         lastGistUrl: lastGist.html_url
//       })
//     })
//   }
//   render() {
//     const { username,lastGistUrl } = this.state
//     return (
//       <div>
//         {this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>
//       </div>
//     )
//   }
// }
// class LikeButton extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       text: 'like',
//     }
//   }
  
//   handleClick = () => {
//     if(this.state.text === 'like') {
//       this.setState({
//         text: 'dislike'
//       })
//     } else {
//       this.setState({
//         text: 'like'
//       })
//     }
//   }
//   render () {
//     const { text } = this.state
//     return (
//       // like or dislike
//       <p onClick={this.handleClick}>
//         you {text} this.Click to toggle
//       </p>
//     )
//   }
// }
// ReactDOM.render(
//   // <Hello name="world" />, 
//   // <UserGist source="https://api.github.com/users/octocat/gists" />,
//   <LikeButton  />,
//   document.getElementById('root'));

// serviceWorker.unregister();


import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Counter from './components/Counter'
import counter from './reduces'

const store = createStore(counter)
const render = () => ReactDOM.render(
  <Counter 
    value = {store.getState()}
    onIncrement = {() => store.dispatch({type: 'INCREMENT'})}
    onDecrement = {() => store.dispatch({type: 'DECREMENT'})}
  />
  , document.getElementById('root')
)
render();
store.subscribe(render)