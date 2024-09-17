import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const App = () =>{
const router = createBrowserRouter( //array of objects
  [
    {
      path : "/", //path defines the page url
      element : <Home />
    },
    {
      path : "/about",
      element : <About />
    },
    {
      path : "/movie",
      element : <Movie />
    },
    {
      path : "/contact",
      element : <Contact />
    }
  ]
)



  return <RouterProvider router={router} />
}

export default App;