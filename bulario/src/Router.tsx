import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/data/:id" element={<Details />} />
      </Route>
    </Routes>
  )
}
