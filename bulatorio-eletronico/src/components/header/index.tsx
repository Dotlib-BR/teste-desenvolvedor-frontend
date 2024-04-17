import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

import s from './style.module.sass'

export default function Header() {
    return (
        <header className={s.header}>
            <figure>
                <Link to={'/'}>
                    <img src={Logo} className={s.logo} alt='Logo dot.lib' />
                </Link>
            </figure>
        </header>
    )
}
