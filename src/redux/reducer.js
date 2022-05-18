/** @format */

// import store from "./store";

const initState = {
  filters: {
    search: '',
    status: "All",
    priority: [],
  },
  todoList: [
    {
      id: 1,
      name: "study all",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "study one",
      completed: true,
      priority: "High",
    },
    {
      id: 3,
      name: "study two",
      completed: false,
      priority: "Low",
    },
  ],
};
const rootReducer = (state = initState, action) => {
  /*
    {
        type : 'todoList/addTodo',
        playload: {id : 5,name : 'learn',completed :false , priority :'medium'}
    }
     */
  // console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          // {id : 5,name : 'learn',completed :false , priority :'medium'} higher-order component
          action.playload,
        ],
      };
    case "filters/searchFilterChange":
      return {
          ...state,
          filters : {
            ...state.filters, 
            search : action.playload, 
          }
        
      };
    default:
      return state;
  }
};

export default rootReducer;
