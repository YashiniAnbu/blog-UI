import React from "react"
import Template from "./components/Template"
import All from "./components/All"
import FullStackDev from "./components/FullStackDev"
import DataScience from "./components/DataScience"
import CyberSecurity from "./components/CyberSecurity"
import AI from "./components/AI"
import Blog from "./components/Blog"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
         path: "/",
         element: <All />
      },
      {
         path: "/fullstack", 
         element: <FullStackDev /> 
      },
      {
         path: "/datascience", 
         element: <DataScience /> 
       },
      { path: "/cybersecurity", 
        element: <CyberSecurity /> 
      },
      { path: "/ai", 
        element: <AI /> 
      },
      { path: "*",
        element: <Error />
      }
    ]
  },
     { 
      path: "/blog/:id", 
      element: <Blog />
     },
])


  return(
     <RouterProvider router={router} />

  )
}
export default App;