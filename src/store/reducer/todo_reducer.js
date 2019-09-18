const initState = [
    {
        todo:'早上七点二十起床',
        complete_status:false
    },
    {
        todo:'早上七点五十出发',
        complete_status:true
    },
    {
        todo:'中午十二点吃饭',
        complete_status:false
    },
    {
        todo:'中午十二点半午休',
        complete_status:false
    }
]

const todos = (state=initState,action)=>{
    let newState = JSON.parse(JSON.stringify(state));
    let newItem = {
        todo:action.value || 'What Are You Doing',
        complete_status:false
    }
    switch(action.type){
        case 'addToDoListItem':
            newState.push(newItem);
            return newState;
        break;
        case 'deleteTodoListItem':
            newState.splice(action.value,1);
            return newState;
        break;
        case 'todolistToggleFinishItem':
            newState[action.value].complete_status = !newState[action.value].complete_status;
            return newState;
        break;
        default:
            return state;
    }
}

export default todos;