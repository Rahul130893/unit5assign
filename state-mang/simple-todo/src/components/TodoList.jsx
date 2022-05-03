
import '../App.css'
import { TodoItem } from './TodoItem'

export const TodoList=({list})=>{
    return (
        <div className="list">
          
            <div>
           {list.map((e)=>(
                 <TodoItem  individual={e}  /> 
           ))}
            </div>
            
               
            
        </div>
    )
}