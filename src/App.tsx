
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
