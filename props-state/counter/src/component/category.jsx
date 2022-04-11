import { useState } from "react"
import "./category.css"

function Component(){
   const [counter, setCounter]= useState(1)
   const handle=(value)=>{
     
       setCounter(counter+value)
   }

   const mult=(value)=>{
       setCounter(counter*value)
   }

    return (
        <div className={`${counter%2===0 ? "even": "odd"}`}>
            <h1>counter:{counter}</h1>
            <button onClick={()=>handle(1)}>Add1</button>
            <button onClick={()=>handle(-1)}>Sub1</button>
            <button onClick={()=>mult(2)}>Double</button>

        </div>
    )
}
export { Component}