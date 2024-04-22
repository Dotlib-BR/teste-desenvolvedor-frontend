import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./Pages/Home"
import { ErrorPage } from "./Pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
