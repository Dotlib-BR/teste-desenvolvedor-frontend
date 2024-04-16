import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DetailProduct, Home } from '../pages'

export function RoutesApp() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/details/:uid',
      element: <DetailProduct />,
    },
  ])

  return <RouterProvider router={routes} />
}
