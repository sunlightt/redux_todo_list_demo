import {combineReducers} from 'redux';
import defaultInputValue from './default_input_default_reducer.js';
import todos from './todo_reducer.js';
import filterTodo from './filter_todo.js';

const initState = {
    // defaultInputValue:'add someting',
    // filterTodo:'ALL',
    // todoList:[
    //     {
    //         todo:'todoitem1',
    //         complete_status:false
    //     }
    // ]
}

// const todoApp = (state=initState,action)=>{
//     const reducer = {
//         defaultInputValue:defaultInputValue(state.defaultInputValue,action),
//         todos:todos(state.todos,action),
//         filterTodo:filterTodo(state.filterTodo,action)
//     } 
//     return Object.assign({},state,reducer);
// }

export default combineReducers({
    defaultInputValue,
    todos,
    filterTodo
})

// export default todoApp;