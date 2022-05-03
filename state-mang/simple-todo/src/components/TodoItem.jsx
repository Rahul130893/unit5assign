import { useState } from "react";

export const TodoItem = ({ individual}) => {
  const [toggle, setToggle] = useState({ individual });

  
  const handle = () => {
    setToggle({ ...toggle, status: !toggle.status });
  };


  //   const handlestatus = (id) => {
  //   setTodolist(
  //     todolist.map((e) => (e.id === id ? { ...e, status: !e.status } : e))
  //   );
  // };

  

  return (
    <div className="individualItems">
      <div>
        <p>{individual.title}</p>
        <div>
          <input
            type="radio"
            checked={toggle.status}
            onChange={() => {
              handle();
            }}
            className={toggle.status ? "radiobtnB" : "radiobtnA"}
          />
          
        </div>
      </div>
    </div>
  );
};
