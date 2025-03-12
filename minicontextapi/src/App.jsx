
import './App.css'
import Login from './componenets/Login'
import Password from './componenets/Password'
import Profile from './componenets/Profile'
import Data from './componenets/data'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
     <Profile />
      <Password/>
      
      

    </UserContextProvider>
    
  )
}

export default App