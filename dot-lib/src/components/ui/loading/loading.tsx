import styles from './styles.module.scss'
import { icons } from '../../../assets/icons'

export function Loading() {
  return (
    <div className={styles.loadingPage}>
      <span className={styles.spinner}>{icons.loading}</span>
    </div>
  )
}
