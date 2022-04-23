
import '../App.css'
import { TodoItem } from './TodoItem'

export const TodoList=({list, handlestatus})=>{
    return (
        <div className="list">
          
            <div>
           {list.map((e)=>(
                 <TodoItem handlestatus={handlestatus} individual={e} /> 
           ))}
            </div>
            
               
            
        </div>
    )
}