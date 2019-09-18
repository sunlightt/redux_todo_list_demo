import React, { Component } from 'react';
import {List,Icon,Button} from 'antd';
import { connect } from 'react-redux'
import Header from './Header';
import store from '../../store'
import './style.scss';
class TodoList extends Component {
    constructor(props) {
      super(props);
      // const {defaultInputValue,todos,filterTodo} = store.getState();
      const {defaultInputValue,data,filterTodo} = this.props;
      this.state={
        data:data,
        filterTodo
      }
      // store.subscribe(this.receiveReduxData);
    }

    // 更新redux 初始化赋值
    receiveReduxData = ()=>{
      console.log('store.getState()',store.getState())
      const {defaultInputValue,todos,filterTodo} = store.getState();
      this.setState({
        defaultInputValue,
        data:todos,
        filterTodo
      })
    }

    deleteTodoListItem(){
      store.dispatch({
        type:'deleteTodoListItem',
        value:1
      })
    }

    todolistFinishItem(target){
      this.props.todolistToggleFinishItem && this.props.todolistToggleFinishItem(target);
    }

    filterTodoList(type){
      this.props.filterTodoList && this.props.filterTodoList(type);
      // store.dispatch({
      //   type:type,
      //   value:type
      // });
    }

    renderListHeader(){
      const {filterTodo} = this.props;
      return(
        <div className='header_container'>
          <Button type={filterTodo==='ALL' ? "primary" : 'default'} onClick={this.filterTodoList.bind(this,'ALL')}>全部</Button>
          <Button type={filterTodo==='FINISHED' ? "primary" : 'default'} onClick={this.filterTodoList.bind(this,'FINISHED')}>已完成</Button>  
          <Button type={filterTodo==='UNFINISH' ? "primary" : 'default'} onClick={this.filterTodoList.bind(this,'UNFINISH')}>未完成</Button>   
        </div>
      )
    }

    render() {
      const {defaultInputValue,data,filterTodo} = this.props;
      console.log('props',this.props)
      return (
        <div className="container_wrap">
            <Header/>
            {/* list */}
            <List
              bordered
              dataSource={data}
              header={this.renderListHeader()}
              renderItem={(item,index) => (
                <List.Item
                  key={index}
                  className={item.complete_status ? 'todo_list done_todo_list' :  "todo_list"}
                  onClick={this.todolistFinishItem.bind(this,index)}
                >
                  {item.todo} 
                  {
                    item.complete_status ?
                    <Icon type="check" className="icon"/> : null
                  }
                </List.Item>
              )}
            />
        </div>
      );
    }
}

// handle filter data
const handleFilterData=(data,filter)=>{
  switch (filter) {
    case 'ALL':
      return data;
    break;
    case 'UNFINISH':
      return data.filter(t => !t.complete_status);
    break;
    case 'FINISHED':
      return data.filter(t => t.complete_status);
    break;
    default:
      return data;
  }
}

const mapStateToProps = (state) => {
  return {
    filterTodo:state.filterTodo,
    data:handleFilterData(state.todos,state.filterTodo)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // 已完成 未完成状态切换
    todolistToggleFinishItem: (index) => {
      dispatch({
        type:'todolistToggleFinishItem',
        value:index
      });
    },
    // 代办任务显示过滤条件  （全部 未完成 已完成)
    filterTodoList(type){ 
      dispatch({
        type:type,
        value:type
      })
    }
  }
}

const Todo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default Todo;

