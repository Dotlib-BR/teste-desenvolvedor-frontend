import s from './style.module.sass'

export default function Footer() {
    return (
        <footer className={s.footer}>
            <p>
                Desenvolvido com ❤️ por{' '}
                <a href='https://www.brunobarreiras.com.br'>Bruno Barreiras</a>
            </p>
        </footer>
    )
}
