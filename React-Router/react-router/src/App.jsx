import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


const App = () =>{
  // ------------------New method-without helper function---------------------------- 
// const router = createBrowserRouter( //array of objects
//   [
//     {
//       path : "/", //path defines the page url
//       element : <Home />
//     },
//     {
//       path : "/about",
//       element : <About />
//     },
//     {
//       path : "/movie",
//       element : <Movie />
//     },
//     {
//       path : "/contact",
//       element : <Contact />
//     }
//   ]
// )


//---------------------------------Traditional method : using helper function------------------------------
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>//we are required with a parent element always
      <Route  path = "/"   element = {<Home />} />
      <Route  path = "/about"   element = {<About />} />
      <Route  path = "/movie"   element = {<Movie />} />
      <Route  path = "/contact"   element = {<Contact />} />
      
    </Route>
  )
)






  return <RouterProvider router={router} />
}

export default App;