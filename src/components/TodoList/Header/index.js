import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Input} from 'antd';
import store from '../../../store'
import './style.scss';
const { Search } = Input;
class Header extends Component {
    constructor(props) {
      super(props);
      // const {defaultInputValue,data} = store.getState();
      // const {defaultInputValue,data} = this.props;
      // this.state={
      //   defaultInputValue:defaultInputValue
      // }
    }

    addToDoListItem(value){
      // const action = {
      //   type:'addToDoListItem',
      //   value:value
      // }
      // store.dispatch(action);

      this.props.addToDoListItem && this.props.addToDoListItem(value);
    }

    render() {
      console.log('header props',this.props)
      const {defaultInputValue} = this.props;
      return (
        <div className="todo_header">
            {
              defaultInputValue ? 
              <Search
                  placeholder={defaultInputValue}
                  // defaultValue={defaultInputValue}
                  // value={defaultInputValue}
                  enterButton="add item"
                  size="large"
                  onSearch={this.addToDoListItem.bind(this)}
              /> :
              <Search
                  enterButton="add item"
                  size="large"
                  onSearch={this.addToDoListItem.bind(this)}
              />
            }
        </div>
      );
    }
}


const mapStateToProps = (state)=>{
  return({
    defaultInputValue:state.defaultInputValue      
  })
}

const mapDispatchToProps = (dispatch)=>{
  return({
    // 添加代办事项
    addToDoListItem:(value)=>{
      // 添加代办事项
      dispatch({
        type:'addToDoListItem',
        value:value
      });
      // 清除输入框的值
      // console.log('test log')
      // dispatch({
      //   type:'clearValue',
      //   value:''
      // })
    }  
  })
}

const TodoHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default TodoHeader;

