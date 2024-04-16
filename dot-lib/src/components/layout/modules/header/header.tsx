import styles from './styles.module.scss'
import Logo from '../../../../assets/logo.png'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.content}`}>
        <img src={Logo} alt="Logo Dot.lib" className={styles.logo} />
      </div>
    </header>
  )
}
