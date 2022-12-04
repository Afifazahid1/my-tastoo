import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import { Blogs } from "./pages/blogs/Blogs";
import { Contact } from "./pages/contact/Contact";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { NoPage } from "./pages/NoPage";
import { Login } from "./pages/login/Login";

import { Burger } from "./pages/burger/Burger";
import { Pasta } from "./pages/pasta/Pasta";
import  Sweet  from "./pages/dessert/Sweet"
import { Pizza } from "./pages/pizza/Pizza";
import { Cart } from "./pages/cart/Cart";
import Signup from "./pages/signup/Signup";


function App() { 
  const router = createBrowserRouter
  ([
    

    {
    path: "/",
      element: <Home />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/about",
      element: <About />,
    },
    
    {
      path: "/login",
      element: <Login/>,
    }, 
    {
      path:  "/signup",
      element: <Signup/>,
    },
    {
      path: "/burger",
      element: <Burger/>,
    }, 
    {
      path: "/dessert",
      element: <Sweet/>,
    }, 
    {
      path: "/pasta",
      element: <Pasta/>,
    }, 
    {
      path: "/pizza",
      element: <Pizza/>,
    }, 
    {
      path: "/ShoppingCart",
      element: <Cart />,
    },
    
   
  ]);
  return (
    <>
    <RouterProvider router={router} />
    
    </>
  
  );
}

export default App;
