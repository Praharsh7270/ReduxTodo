import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todo.jsx'

function App() {
  const [count, setCount] = useState("")

  return (
    <>
      <h1>Learn about redux toolkit </h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
