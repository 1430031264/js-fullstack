import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import TouchableOpacity from './TouchableOpacity'
import './App.css';
import 'antd/dist/antd.css'

const size = 'large';
class App extends Component {
  constructor(props) {
    super(props);
    this.functionRef = null;
    this.objectRef = React.createRef()
    this.inputRef = React.createRef()
  }
  state = { value: '' }
  componentDidMount() {
    //组件 挂载再页面上
    //通过原生 js 操作 dom
    this.refs.strRef.innerHTML = '回首掏，嘿嘿'; //了解
    this.functionRef.innerHTML = '鬼刀一开,看不见'; //了解
    this.objectRef.current.innerHTML = '走位、走位' //掌握
    // this.functionRef.addEventListener('click',() => {
    //   console.log('打一下弟弟')
    // }) 违规操作 不推荐
  }
  handlePrint1 = () => {
    console.log(this.inputRef.current.value)
  }
  handleInputChange = (e) => {
    let value = e.target.value
    value = value.slice(0,10);
    this.setState({
      value
    })
  }
  render() {

    return (
      <div>
        <div>
          
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <br />
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Normal</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
          <Button type="danger" size={size}>
            Danger
          </Button>
          <Button type="link" size={size}>
            Link
          </Button>
          <br />
          <Button type="primary" shape="circle" icon="download" size={size} />
          <Button type="primary" shape="round" icon="download" size={size}>
            Download
          </Button>
          <Button type="primary" icon="download" size={size}>
            Download
          </Button>
          <br />
          <Button.Group size={size}>
            <Button type="primary">
              <Icon type="left" />
              Backward
            </Button>
            <Button type="primary">
              Forward
              <Icon type="right" />
            </Button>
          </Button.Group>
          <TouchableOpacity>
            确定
            <a href="#">确定</a>
          </TouchableOpacity>
          <TouchableOpacity>
            取消
            <a href="#">取消</a>
          </TouchableOpacity>
        </div>
        <h1 ref="strRef"></h1>

        <h1 ref={(node) => {
          this.functionRef = node;
        }}></h1>

        <h1 ref={this.objectRef}></h1>
        {/* 非受控 只能在最后点击的一下拿到值，点击之前不知道干什么 */}
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handlePrint1}>btn1</button>
        {/* 受控 value的值能被控制，边输入便控制 state 来源应该单一，value 应该来自state */}
        <input type="text" value={this.state.value} onChange={this.handleInputChange} />
        <button onClick={this.handlePrint2}>btn2</button>
      </div>
    )
  }
}

export default App;
