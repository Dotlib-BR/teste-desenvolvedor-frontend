import styles from './styles.module.scss'
import { CardProduct } from './modules'
import { useContexts } from '../../../../contexts/useContexts'
import { Button } from '../../../../components/ui'
import { useListProducts } from './useListProducts'

export function ListProducts() {
  const { filterProducts, products } = useContexts()
  const {
    nextPage,
    prevPage,
    currentProducts,
    pageButtons,
    currentPage,
    lastIndex,
  } = useListProducts()

  return (
    <div>
      <div className={styles.listProducts}>
        {filterProducts.length === 0 && products.length > 0 && (
          <div className={styles.filterNotResult}>
            <p>Nenhum produto corresponde ao filtro!</p>
          </div>
        )}
        {filterProducts.length > 0 &&
          currentProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </div>

      <div className={styles.buttonsPagination}>
        <Button disabled={currentPage === 1} onClick={prevPage}>
          Anterior
        </Button>
        {pageButtons.map((button) => (
          <Button
            disablePagination={currentPage !== button.pageNumber}
            onClick={button.onClick}
            key={button.pageNumber}
          >
            {button.pageNumber}
          </Button>
        ))}
        <Button
          disabled={lastIndex >= filterProducts.length}
          onClick={nextPage}
        >
          Próxima
        </Button>
      </div>
    </div>
  )
}
