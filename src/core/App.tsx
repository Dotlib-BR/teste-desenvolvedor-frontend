import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'

import { lightTheme } from './styles/themes/lightTheme'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
