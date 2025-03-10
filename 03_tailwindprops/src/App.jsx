import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from '../components/cards'
import './App.css'

let myobj={
  productname:'watch',
  price: 599
}

let myArr=[1,2,3,4,5,6,7]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-3xl font-bold underline">
      Hello world!
    </h1>
    <Card storename='Visar' productp='$324' productname="watch" /> 
    <Card storename='Visar' product={myobj} numArr={myArr} />
    </>
  )
}

export default App
