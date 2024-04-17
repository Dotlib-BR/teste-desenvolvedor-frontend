import { icons } from '../../../../assets/icons'
import {
  OrderProps,
  TypeSearchProps,
} from '../../../../contexts/productContext'
import { useContexts } from '../../../../contexts/useContexts'
import styles from './styles.module.scss'

export function FilterProduct() {
  const {
    typesSearch,
    filterValue,
    typeSearch,
    order,
    setOrder,
    setFilterValue,
    setTypeSearch,
  } = useContexts()

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
      <div className={styles.order}>
        <p>ordenar por:</p>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value as OrderProps)}
        >
          <option value={'asc'}>mais recentes</option>
          <option value={'desc'}>menos recentes</option>
        </select>
      </div>
    </div>
  )
}
