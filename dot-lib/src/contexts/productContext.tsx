import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

export type TypeSearchProps = 'product' | 'company'

export interface GetProductsProps {
  type: TypeSearchProps
  text: string
}

interface DocumentsProps {
  id: string
  type: string
  expedient: string
  url: string
}

interface ActivePrinciplesProps {
  id: string
  name: string
}

export interface ProductProps {
  readonly id: string
  name: string
  published_at: string
  company: string
  documents: DocumentsProps[]
  active_principles: ActivePrinciplesProps[]
}

export type OrderProps = 'desc' | 'asc'
interface TypeProps {
  readonly id: string | number
  title: string
  type: TypeSearchProps
}

interface ProductContextProps {
  filterProducts: ProductProps[]
  products: ProductProps[]
  filterValue: string
  typeSearch: TypeSearchProps
  typesSearch: TypeProps[]
  order: OrderProps
  loadingProducts: boolean
  setFilterValue: Dispatch<SetStateAction<string>>
  setTypeSearch: Dispatch<SetStateAction<TypeSearchProps>>
  setOrder: Dispatch<SetStateAction<OrderProps>>
}

export const ProductsContext = createContext({} as ProductContextProps)

export default function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [filterValue, setFilterValue] = useState<string>('')
  const [typeSearch, setTypeSearch] = useState<TypeSearchProps>('product')
  const [order, setOrder] = useState<OrderProps>('desc')
  const [loadingProducts, setLoadingProducts] = useState(true)

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get('/data')
        setProducts(response.data)
      } catch (error) {
        console.log(error)
        // tratar erros
      }
      setLoadingProducts(false)
    }
    getProducts()
  }, [])

  const typesSearch: TypeProps[] = [
    {
      id: 1,
      type: 'product',
      title: 'Medicamento',
    },
    {
      id: 2,
      type: 'company',
      title: 'Laboratório',
    },
  ]

  const filterProducts = products
    .filter((product) => {
      return product[typeSearch === 'product' ? 'name' : 'company']
        .toUpperCase()
        .includes(filterValue.toUpperCase().trim())
    })
    .sort((a, b) => {
      const dateA = new Date(a.published_at)
      const dateB = new Date(b.published_at)

      if (order === 'desc') {
        return dateA.getTime() - dateB.getTime()
      } else {
        return dateB.getTime() - dateA.getTime()
      }
    })

  return (
    <ProductsContext.Provider
      value={{
        filterProducts,
        filterValue,
        products,
        typeSearch,
        typesSearch,
        order,
        loadingProducts,
        setFilterValue,
        setTypeSearch,
        setOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
