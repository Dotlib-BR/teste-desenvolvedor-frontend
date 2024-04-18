import { useCallback, useEffect, useState } from 'react'
import { redirect, useLocation } from 'react-router-dom'
import api from '../../services/api'
import MedicineDetails from '../../components/medicine-details'
import { SelectedMedicine } from '../../interface/selected-medicine-prop'

import s from './style.module.sass'

export default function Query() {
    const location = useLocation()
    const search = new URLSearchParams(location.search).get('search')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const { data } = await api.get(`/data?name=${search}`)
            setData(data)
        } catch (error) {
            console.error('Erro ao buscar dados:', error)
        } finally {
            setLoading(false)
        }
    }, [search])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    if (search === null || search === '') {
        redirect('/')
    }

    if (loading) {
        return <div className={s.container}>Carregando...</div>
    }

    if (data.length === 0) {
        return (
            <div className={s.container}>
                Nenhum resultado encontrado para "{search}"
            </div>
        )
    }

    return (
        <main className={s.container}>
            <h1 className={s.titleSearch}>Resultados para: {search}</h1>

            <section className={s.searchItems}>
                {data.map((item: SelectedMedicine) => (
                    <MedicineDetails key={item.id} data={item} />
                ))}
            </section>
        </main>
    )
}
