import './styles/index.scss'
import { RoutesApp } from './routes/routes'
import ProductProvider from './contexts/productContext'

export function App() {
  return (
    <ProductProvider>
      <RoutesApp />
    </ProductProvider>
  )
}
