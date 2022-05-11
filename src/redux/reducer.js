import store from "./store";

const initState = {
    filters: {
        search : '',
        status : "All",
        priority : []

    },
    todoList : [
        {
            id : 1, name : "study all", completed : false , priority : 'medium'
        },
        {
            id : 2, name : "study one", completed : true , priority : 'hight'
        },
        {
            id : 3, name : "study two", completed : false , priority : 'low'
        }
    ]
}
const rootReducer = (state = initState , action ) => {
    /*
    {
        type : 'todoList/addTodo',
        playload: {id : 5,name : 'learn',completed :false , priority :'medium'}
    }
     */
    switch(action.type) {
        case 'todoList/addTodo': 
        return {
            ...state, 
            todoList: [
                ...state.todoList,
                {id : 5,name : 'learn',completed :false , priority :'medium'}
            ]
        }
        default:
            return state;
    }
}

export default rootReducer;