import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import About from "../pages/About/About";
import Client from "../pages/Client/Client";
import Contact from "../pages/Contact/Contact";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
           element: <About/>
        },
        {
          path: '/portfolio',
          element: <Portfolio/>
        },
        {
          path: 'services/:id',
          element: <Services/>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/client',
          element: <Client/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    },
  ]);