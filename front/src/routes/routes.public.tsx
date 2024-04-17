import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { routesPublic } from './routesLink'
import * as PublicPages from '../pages/index'

const PublicRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to={routesPublic.drugs} />} />
    <Route path={routesPublic.drugs} element={<PublicPages.Drugs />} />
    <Route path={routesPublic.drugs + ':id'} element={<PublicPages.Details />} />
  </Routes>
)

export { PublicRoutes }