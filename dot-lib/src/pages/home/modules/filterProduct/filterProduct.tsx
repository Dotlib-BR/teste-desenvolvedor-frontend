import { icons } from '../../../../assets/icons'
import { Button } from '../../../../components/ui'
import { GetProductsProps, TypeSearchProps } from '../../useHome'
import styles from './styles.module.scss'
import { useFilterProducts } from './useFilterProducts'

interface FilterProductsProps {
  getProducts: (data: GetProductsProps) => Promise<void>
}

export function FilterProduct({ getProducts }: FilterProductsProps) {
  const {
    typesSearch,
    filterValue,
    typeSearch,
    loading,
    aplySearch,
    setFilterValue,
    setTypeSearch,
  } = useFilterProducts({ getProducts })

  return (
    <div className={styles.filterProduct}>
      <div className={styles.selectType}>
        <p>Busque pelo nome do:</p>
        {typesSearch.map((type) => (
          <label key={type.id} className={styles.labelRadio}>
            <input
              type="checkbox"
              checked={typeSearch === type.type}
              onChange={() => setTypeSearch(type.type as TypeSearchProps)}
            />
            <p>{type.title}</p>
          </label>
        ))}
      </div>
      <label className={styles.label}>
        <input
          className={styles.input}
          onChange={(e) => setFilterValue(e.target.value)}
          value={filterValue}
          placeholder="Busca rápida"
        />
        <span className={styles.inputIcon}>{icons.search}</span>
      </label>

      <Button onClick={aplySearch} loading={loading}>
        Aplicar Busca
      </Button>
    </div>
  )
}
