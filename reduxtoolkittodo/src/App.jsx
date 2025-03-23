import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NaddTodo from './components/NaddTodo'
import Todos from './components/Todo'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <NaddTodo />
      <Todos />
    </>
  )
}

export default App