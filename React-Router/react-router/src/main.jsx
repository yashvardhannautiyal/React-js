import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Components/layout/Layout"
import About from "./pages/About"
import Home from "./Components/Home"
import Contact from './Components/Contact'
import User from './Components/User'
import Github from './Components/Github'


// ------------------New method-without helper function---------------------------- 
  // prefer this method 
  // const router = createBrowserRouter( //array of objects
  //   [
  //     {
  //       path : "",
  //       element : <Layout />,
  //       children : [
  //         {
  //           path : "", //path defines the page url
  //           element : <Home />
  //         },
  //         {
  //           path : "/about",
  //           element : <About />
  //         },  
  //         {
  //           path : "/contact",
  //           element : <Contact />
  //         }  
  //       ]
  //     }
      
  //   ]
  // )
  
  
  //---------------------------------Traditional method : using helper function------------------------------
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      //we are required with a parent element always
        <Route  path = "/"   element = {<Layout />}>
        <Route  path = ""   element = {<Home />} />
        <Route  path = "about"   element = {<About />} />
        <Route  path = "contact"   element = {<Contact />} />        
        <Route  path = "user/:userId"   element = {<User />} /> 
        
               {/* whatever value entered by user after "/user/" will be takend as dynamic data*/}
        <Route  path = "github"   element = {<Github />} /> 
      </Route>
    )
  )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router}/>
  </StrictMode>,
)
