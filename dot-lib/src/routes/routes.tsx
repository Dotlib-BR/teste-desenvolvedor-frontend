import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DetailProduct, Home } from '../pages'
import { Layout } from '../components/layout/layout'

export function RoutesApp() {
  const routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/details/:uid',
          element: <DetailProduct />,
        },
      ],
    },
  ])

  return <RouterProvider router={routes} />
}
