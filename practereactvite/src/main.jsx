import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Test Funxtion</h1>
      <p>it is a test function </p>
    </div>
  )
}

const Element =(
  <a href='https://google.com' target='_blank'>visit google</a>
)

const usernamex=' chai and react'

const createEmlement= React.createElement(
  'a',
  {href:'google.ccm',target:'_blank'},
  'click me to visit google',
  usernamex
)

createRoot(document.getElementById('root')).render(
 
    <App />
    //<MyApp />
    //Element
    //createEmlement
)
