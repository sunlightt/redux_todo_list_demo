// 过滤todo list 

const defaultInputValue = (state='add someting',action) => {
    switch(action.type){
        case 'clearValue':
            console.log('clear log')
            return '';
        break;
        default:
            return state;
    }
}

export default defaultInputValue;