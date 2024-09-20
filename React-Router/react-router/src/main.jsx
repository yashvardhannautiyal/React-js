import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Components/layout/Layout"
import About from "./pages/About"
import Home from "./Components/Home"
import Contact from './Components/Contact'


// ------------------New method-without helper function---------------------------- 
  // prefer this method 
  const router = createBrowserRouter( //array of objects
    [
      {
        path : "",
        element : <Layout />,
        children : [
          {
            path : "", //path defines the page url
            element : <Home />
          },
          {
            path : "/about",
            element : <About />
          },  
          {
            path : "/contact",
            element : <Contact />
          }  
        ]
      }
      
    ]
  )
  
  
  //---------------------------------Traditional method : using helper function------------------------------
  
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>//we are required with a parent element always
  //       <Route  path = "/"   element = {<Home />} />
  //       <Route  path = "/about"   element = {<About />} />
  //       <Route  path = "/movie"   element = {<Movie />} />
  //       <Route  path = "/contact"   element = {<Contact />} />
        
  //     </Route>
  //   )
  // )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router}/>
  </StrictMode>,
)
