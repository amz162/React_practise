import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter]=useState(15);

  //let counter = 5

  const Addvalue = ()=>{
    console.log('clicked',counter);
    //counter = counter + 1
    if(counter<20){
    setcounter(counter + 1)
    setcounter(counter + 1)
    setcounter(counter + 1)
    setcounter(counter + 1)
    setcounter(prevCounter => prevCounter + 1)
    setcounter(prevCounter => prevCounter + 1)
    setcounter(prevCounter => prevCounter + 1)
  
  
  }
    //setcounter(counter)
  }

  const removevalue = ()=>{
    console.log('removed clicked',counter);
    if(counter>0){
    counter = counter - 1
    //setcounter(counter + 1)
    setcounter(counter)}
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>counter value : {counter}</h2>
       <button onClick={Addvalue}>Add Value</button>
       <br/>
       <button  onClick={removevalue}>remove Value</button>
    </>
  )
}

export default App
