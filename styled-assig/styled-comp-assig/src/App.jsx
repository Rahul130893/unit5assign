import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from "./components/Button"
import {Flex} from "./components/Flex"

function App() {
  const [count, setCount] = useState(0)
  // const [color, setColor]= useState("cyan")

  return (
    <div className="App">

      <Flex>

      <Button type="primary">Primary Button</Button>
      <Button type="default">Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>

      </Flex>
    
   
    </div>
  )
}

export default App
