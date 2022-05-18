/** @format */

// export const addTodoAction ={
//     type: 'todoList/addTodo',
//     playload : {id : 5,name : 'learn',completed :false , priority :'medium'}
// }

// action creators => function  nen sung dung

export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    playload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    playload: text,
  };
};
