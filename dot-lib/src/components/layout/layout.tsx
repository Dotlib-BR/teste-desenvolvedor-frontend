import styles from './styles.module.scss'
import { Header } from './modules'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={`container ${styles.page}`}>
        <Outlet />
      </div>
    </main>
  )
}
