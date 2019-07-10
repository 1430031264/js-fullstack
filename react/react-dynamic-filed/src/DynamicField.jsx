import React, { Component } from 'react';

let generateId = 0;
class DynamicField extends Component {
  state = { 
    data:[
      {name:'豪大大',age:17,id:0}
    ]
   }
  handleFieldChange = (key,value,id) => {
    //浅拷贝,不可变数据
    let data = this.state.data.slice(0);
    let index = data.findIndex((item)=>item.id === id);
    data[index][key] = value;
    this.setState({
      data
    })
  }
  handleDelete = (id) => {
    let data = this.state.data.slice(0);
    let index = data.findIndex((item)=>item.id === id);
    data.splice(index,1);
    this.setState({
      data
    })
  }
  handleAdd = () => {
    let data = this.state.data.slice(0);
    generateId++;
    data.push({
      name:'',age:0,id:generateId
    })
    // push返回一个数组的长度
    this.setState({
      data
    })
  }
  render() { 
    const { data } = this.state
    return (  
      <>
      {
        data.map((fieldData,i)=>{
          return (
            <Filed key={fieldData.id} fieldData={fieldData} onFieldValueChange={this.handleFieldChange} onFieldDelete={this.handleDelete}/>
          )
        })
      }
      <br/>
      <button onClick={this.handleAdd}>添加</button>
      <br/>
      <button>提交</button>
      </>
    );
  }
}
 
class Filed  extends Component {
  state = {  }
  handleFieldChangeName = (e) => {
    const name = e.target.value;
    const id = parseInt(e.target.dataset.id);//将传下来的字符串转为num
    const {onFieldValueChange} = this.props;
    onFieldValueChange('name',name,id)
  }
  handleFieldChangeAge = (e) => {
    const age = e.target.value;
    const id = parseInt(e.target.dataset.id);
    const {onFieldValueChange} = this.props;
    onFieldValueChange('age',age,id);
  }
  handlleDelete = (e) => {
    const id = parseInt(e.target.dataset.id);
    const {onFieldDelete} = this.props;
    onFieldDelete(id)
  }
  render() { 
    const {fieldData} = this.props;
    const { name,age } = fieldData
    return ( 
      <div>
        {/* 受控组件 onChange动态改变data值 */}
        姓名:<input type="text" value={name} data-id={fieldData.id} onChange={this.handleFieldChangeName}/>
        年龄:<input type="number" value={age} data-id={fieldData.id} onChange={this.handleFieldChangeAge}/>
        <button onClick={this.handlleDelete} data-id={fieldData.id}>删除</button>
      </div>
     );
  }
}
 

export default DynamicField;