import { useState } from "react";

export const TodoItem = ({ individual, handlestatus}) => {
  const [check, setCheck] = useState("checked");




  return (
    <div className="individualItems">
      <div>
        <p>{individual.title}</p>
        <div>
          <input
            onChange={() => {handlestatus(individual.id)}}
            className={individual.status ? "radiobtnB" : "radiobtnA"}
            type="radio"
            
          />
          {individual.status ? "yes" : "no"}
        </div>
      </div>
    </div>
  );
};
