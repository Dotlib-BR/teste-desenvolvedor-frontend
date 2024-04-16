import styles from './styles.module.scss'
import { ProductProps } from '../../useHome'
import { CardProduct } from './modules'

interface ListProductsProps {
  list: ProductProps[]
}

export function ListProducts({ list }: ListProductsProps) {
  console.log(list)
  return (
    <div>
      <div className={styles.listProducts}>
        {list.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
