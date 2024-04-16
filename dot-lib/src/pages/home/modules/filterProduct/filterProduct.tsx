import { icons } from '../../../../assets/icons'
import { TypeSearchProps } from '../../../../contexts/productContext'
import { useContexts } from '../../../../contexts/useContexts'
import styles from './styles.module.scss'

export function FilterProduct() {
  const {
    typesSearch,
    filterValue,
    typeSearch,
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
    </div>
  )
}
