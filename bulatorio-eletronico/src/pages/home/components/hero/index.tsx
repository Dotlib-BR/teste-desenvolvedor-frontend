import s from './style.module.sass'

export default function Hero() {
    return (
        <section className={s.containerHero}>
            <input
                type='text'
                name='search'
                id='search'
                placeholder='Digite o nome do medicamento'
                className={s.inputSearch}
            />
        </section>
    )
}
