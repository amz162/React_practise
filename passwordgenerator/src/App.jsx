import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [schar, setSchar] = useState(false)
  const [password, setPassword] = useState("")
  
  //useREF hook
  const passRef=useRef(null)

  const passwordgenerator = useCallback(()=>{

    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
    if(number)str+="0123456789"
    if(schar)str+="!@#$%^&*()_+{}[]\|><?/.,~`"
    
    for (let i = 0; i < length; i++) {
     let char= Math.floor(Math.random()*str.length+1)
     pass += str.charAt(char)
    }

setPassword(pass)
  },[length,number,schar,setPassword])

  const copytoclipboard=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,6);
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{
  passwordgenerator()
},[length,number,schar,passwordgenerator])

  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-2 my-8 py-8 text-orange-500 bg-gray-800'>
    <h1 className='text-4xl py-4 text-center text-white'> Password generator</h1>
     <div className='flex shadow rounded-lg bg-white overflow-hidden mb-4 text-gray-700'>
      <input type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passRef}
      />
      <button 
      onClick={copytoclipboard}
      className='outline-none bg-blue-700 text-white px-3 py-2 shrink-0'>copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
     <div className=' flex items-center gap=x=1'>
     <input
     type='range'
     min={6}
     max={100}
     value={length}
     className='cursor-pointer'
     onChange={(e)=>{setLength(e.target.value)}} 
      />
      <label>length:{length}</label>
     </div>
     <div className='flex items-center gap-x-1'>
      <input
        type='checkbox'
        defaultChecked={number}
        id='numberImput'
        onChange={()=>{setNumber((prev)=>!prev)}}
      />
      <label htmlFor='NumberInput'>Numbers</label>
     </div>
     <div className='flex items-center gap-x-1'>
      <input
        type='checkbox'
        defaultChecked={number}
        id='numberImput'
        onChange={()=>{setSchar((prev)=>!prev)}}
      />
      <label htmlFor='CharacterInput'>Characters</label>
     </div>
     </div>
    </div>
    </>
  )
}

export default App
