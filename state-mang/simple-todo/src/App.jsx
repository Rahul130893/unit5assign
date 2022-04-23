import { useState } from 'react'

import {Todo} from "./components/Todo"
import './App.css'
import { TodoList } from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Todo/>
    </div>
  )
}

export default App
