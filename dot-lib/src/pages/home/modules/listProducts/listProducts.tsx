import styles from './styles.module.scss'
import { CardProduct } from './modules'
import { useContexts } from '../../../../contexts/useContexts'

export function ListProducts() {
  const { filterProducts, products } = useContexts()

  return (
    <div>
      <div className={styles.listProducts}>
        {filterProducts.length === 0 && products.length > 0 && (
          <div className={styles.filterNotResult}>
            <p>Nenhum produto corresponde ao filtro!</p>
          </div>
        )}
        {filterProducts.length > 0 &&
          filterProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}
