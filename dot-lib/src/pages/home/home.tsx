import { Loading } from '../../components/ui'
import { useContexts } from '../../contexts/useContexts'
import { FilterProduct, ListProducts } from './modules'

export function Home() {
  const { loadingProducts } = useContexts()

  if (loadingProducts) return <Loading />

  return (
    <main>
      <FilterProduct />
      <ListProducts />
    </main>
  )
}
