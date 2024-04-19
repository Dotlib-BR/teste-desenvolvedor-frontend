import { Link } from 'react-router-dom'

import s from './style.module.sass'

export default function NotFound() {
    return (
        <main className={s.container}>
            <h1 className={s.title}>Página não encontrada...</h1>
            <Link to='/'>
                <button className={s.goHome}>Voltar para Home</button>
            </Link>
        </main>
    )
}
