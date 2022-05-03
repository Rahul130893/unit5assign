import { useState } from "react";


import { TodoList } from "./TodoList";

const Todo = () => {
  const [todolist, setTodolist] = useState([]);
  const [text, setText] = useState("");

  const getData = (data) => {
    
    const payload = {
      title: data,
      status: false,
      id: Math.random(100),
    }; //now data is not array now it have become object now and we have to get title and status from it
    setTodolist([...todolist, payload]);
  };

  // const handlestatus = (id) => {
  //   setTodolist(
  //     todolist.map((e) => (e.id === id ? { ...e, status: !e.status } : e))
  //   );
  // };

  return (
    <div >

      <TodoList list={todolist} />
    
      <div className="todo">
      <input
        onChange={(e) => {      
          setText(e.target.value);
        }}
        type="text"
        placeholder="Write Something"
      />



      <button
        onClick={() => {
          getData(text);
        }}
      >
        Add Todo
      </button>

      </div>
      
   
    </div>
  );
};
export { Todo };
