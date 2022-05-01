import "./style.css";
import { legacy_createStore as createStore } from "redux";
const ADD_TODO = "ADD_TODO";

const addtodo = (title) => {
  return {
    type: ADD_TODO,
    payload: {
      title: title,
      status: false,
    },
  };
};

//reducer to update
const reducer = (store, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...store, todos: [...store.todos, action.payload] };
    default:
      return store;
  }
};

const init = {
  todos: [{ title: "hello", status: false }],
};

const store = createStore(reducer, init); //store is created with reducer and intial state as argument




document.getElementById("btn").addEventListener("click", function (data) {
  let inputTodo = document.getElementById("inputbox").value;
  store.dispatch(addtodo(inputTodo));
  console.log(store.getState());

  
});
console.log(store.getState());

// document.querySelector('#app').innerHTML = `
//  <div className="input">
//  <input id="input" type="text" placeholder="Enter todo" />
//  <button id="btn">Add Todo</button>
//  </div>

//`
