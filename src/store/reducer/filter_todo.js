// 过滤todo list 
const initState = {
    filterTodo:'ALL'
}
const filterTodo = (state='ALL',action) => {
    switch(action.type){
        case 'ALL':
            return 'ALL';
        break;
        case 'UNFINISH':
            return 'UNFINISH';
        break;
        case 'FINISHED':
            return 'FINISHED';
        break;
        default:
            return state;
    }
}

export default filterTodo;