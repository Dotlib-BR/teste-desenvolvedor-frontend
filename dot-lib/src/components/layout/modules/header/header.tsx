import styles from './styles.module.scss'
import Logo from '../../../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../../../ui'

export function Header() {
  const { pathname } = useLocation()

  return (
    <header className={styles.header}>
      <div className={`container ${styles.content}`}>
        <img src={Logo} alt="Logo Dot.lib" className={styles.logo} />
        {pathname !== '/' && (
          <Link to={'/'}>
            <Button>Página inicial</Button>
          </Link>
        )}
      </div>
    </header>
  )
}
