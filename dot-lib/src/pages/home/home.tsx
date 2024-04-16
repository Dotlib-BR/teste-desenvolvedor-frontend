import { FilterProduct } from './modules'
import { useHome } from './useHome'

export function Home() {
  const { getProducts } = useHome()

  return (
    <main>
      <FilterProduct getProducts={getProducts} />
    </main>
  )
}
