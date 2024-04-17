import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { PublicRoutes } from './routes.public'

const Routes: React.FC = () => {

  return <BrowserRouter><PublicRoutes /></BrowserRouter>
}

export { Routes }