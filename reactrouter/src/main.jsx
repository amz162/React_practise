import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import Layout from './layout.jsx';
import Home from './components/Home/home.jsx'
import Aboutus from './components/Aboutus/aboutus.jsx'
import Contactus from './components/Contactus/contactus.jsx'
import User from './components/User/user.jsx'
import Github, { githubInfoLoader } from './components/Github/github.jsx';

// const router= createBrowserRouter([
//   {
//   path:'/',
//   element: <Layout/>,
//   children: [
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<Aboutus/>
//     },
//     {
//       path:"contact",
//       element:<Contactus/>
//     },
    
//   ],
// },
// ]);

const router= createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<Aboutus/>}/>
    <Route path='contact' element={<Contactus/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route 
    loader={githubInfoLoader}

    path='github' 
    element={<Github/>}/>
  </Route>
)
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
