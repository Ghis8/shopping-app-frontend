import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import { Suspense } from "react"
import Register from "./pages/Register"
import Home from "./pages/Home"


function App() {
  const routes=[
    {
      path:'/login',
      element: <Login />
    },
    {
      path:"/register",
      element: <Register />
    },
    {
      path:"/",
      element: <Home />
    }
  ]

  return (
    <Suspense>
       <RouterProvider router={createBrowserRouter(routes)} />
    </Suspense>
   
  )
}

export default App
