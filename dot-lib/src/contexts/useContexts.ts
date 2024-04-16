import { useContext } from 'react'
import { ProductsContext } from './productContext'

export function useContexts() {
  const productsContext = useContext(ProductsContext)

  return { ...productsContext }
}
