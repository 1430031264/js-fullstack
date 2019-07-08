import React ,{ Component } from 'react';
import List from './List'
import CommentList from './CommentList'
import CommentInput from './CommentInput'
import './App.css';
let generateID = 1;
class App extends Component {
  state = {
    lists:[
    {name: '富豪',age: '21', school: 'ECUT',id:0},
    {name: '富豪2',age: '21', school: 'ECUT2',id:1},
    ],
    commentList:[]
  }
  handleAddInfo = () => {
    const lists = this.state.lists.slice(0);
    lists.push({name: '富豪3',age: '21', school: 'ECUT3',id:generateID})
    this.setState({
      lists
    })
  }
  handleListDelete = (id) => {
    // console.log("父组件收到id",id);
    const lists = this.state.lists.slice(0);
    const index = lists.findIndex(list => list.id === id);
    lists.splice(index,1);
    this.setState({
      lists
    })
  }
  handlePublish = (userName,commentContent) => {
    //push setState
    const commentList = this.state.commentList.slice(0);
    commentList.push({
      userName,
      commentContent
    })
    this.setState({
      commentList
    })
  }
  render() {
    const { lists,commentList } = this.state;
    return (
      <>
      <ul>
        <button onClick={this.handleAddInfo}>添加一条数据</button>
        { 
          lists.map((list,i) => {
            return (
              <List key={list.id} list={list} a={1} b={2} onDelete={this.handleListDelete} />
            )
          }) 
        }
      </ul>
      <div>
        <CommentInput onPublish={this.handlePublish}  />
        <CommentList commentList={commentList} />
      </div>
      </>
    )
  }
}

export default App;
