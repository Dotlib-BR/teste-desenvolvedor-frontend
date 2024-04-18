import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchImg from '../../../../assets/search.svg'
import s from './style.module.sass'

export default function Hero() {
    const [searchValue, setSearchValue] = useState<string>('')
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        navigate(`/query?search=${searchValue}`)
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.toUpperCase()
        setSearchValue(value)
    }

    return (
        <section className={s.containerHero}>
            <form className={s.formSearch} onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Digite o nome do medicamento'
                    className={s.inputSearch}
                    value={searchValue}
                    onChange={handleChange}
                    required
                />
                <button type='submit' className={s.searchBtn}>
                    <img src={SearchImg} alt='search icon' />
                </button>
            </form>
        </section>
    )
}
