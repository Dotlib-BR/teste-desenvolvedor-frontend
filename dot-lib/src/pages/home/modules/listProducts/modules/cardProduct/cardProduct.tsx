import styles from './styles.module.scss'
import { Button } from '../../../../../../components/ui'
import { formatDate } from '../../../../../../utils'
import { ProductProps } from '../../../../../../contexts/productContext'

interface CardProductProps {
  product: ProductProps
}

export function CardProduct({ product }: CardProductProps) {
  return (
    <div className={styles.cardProduct}>
      <div>
        <p>
          <strong>Produto: </strong> {product.name}
        </p>
        <p>
          <strong>Laboratório: </strong> {product.company}
        </p>
        <p>
          <strong>Publicado em: </strong>
          {formatDate({ date: product.published_at, hours: true })}
        </p>
      </div>
      <div className={styles.buttonsArea}>
        <Button iconLeft="download" />
        <Button>Ver mais informações</Button>
      </div>
    </div>
  )
}
