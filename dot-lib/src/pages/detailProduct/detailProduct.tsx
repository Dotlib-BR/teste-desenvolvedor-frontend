import styles from './styles.module.scss'
import { formatDate } from '../../utils'
import { useDetailProduct } from './useDetailProduct'
import { Button, Loading } from '../../components/ui'

export function DetailProduct() {
  const { product, handleOpenDoc, loadingProduct } = useDetailProduct()

  if (loadingProduct) return <Loading />

  if (!product) return <></>
  return (
    <main className={styles.detailProduct}>
      <p>
        <strong>Produto: </strong> {product?.name}
      </p>
      <p>
        <strong>Laboratório: </strong> {product?.company}
      </p>
      <p>
        <strong>Publicado em: </strong>{' '}
        {formatDate({ date: product?.published_at, hours: true })}
      </p>
      <div className={styles.priciples}>
        <strong>Contém:</strong>
        {product.active_principles.map((principles, index) => (
          <p key={principles.id}>
            {principles.name}
            {index + 1 < product.active_principles.length && ','}
          </p>
        ))}
      </div>
      <div className={styles.documents}>
        <strong>Documentos: </strong>
        <div className={styles.allDocument}>
          {product.documents.map((doc) => (
            <div key={doc.id} className={styles.document}>
              <p>
                <strong>Registro da bula em orgãos responsáveis:</strong>{' '}
                {doc.expedient}
              </p>
              <div className={styles.bula}>
                <p>
                  <strong>
                    {doc.type === 'PATIENT'
                      ? 'Bula para pacientes'
                      : 'Bula para profissionais de saúde'}
                    :
                  </strong>
                </p>
                <div className={styles.buttonsArea}>
                  <a href={doc.url} download="bula.pdf">
                    <Button iconLeft="download" />
                  </a>

                  <Button
                    iconLeft="see"
                    onClick={() => handleOpenDoc(doc.url)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
