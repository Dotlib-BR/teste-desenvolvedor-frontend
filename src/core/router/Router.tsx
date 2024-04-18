import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Home } from '@/pages'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
