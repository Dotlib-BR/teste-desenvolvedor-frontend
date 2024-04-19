import { useLocation } from 'react-router-dom'
import { useApiContext } from '../../context/api-provider'
import { Items } from '../../interface/items'

import MedicineDetails from '../../components/medicine-details'
import Loading from '../../components/loading'

import s from './style.module.sass'

export default function Query() {
    const { items } = useApiContext()
    const location = useLocation()
    const search = new URLSearchParams(location.search).get('search')

    if (!items) {
        return <Loading />
    }

    const filteredData = items.filter((item: Items) => item.name === search)

    const dataExist =
        filteredData.length === 0
            ? `Nenhum resultado encontrado para "${search}"`
            : `Resultados para: ${search}`

    return (
        <main className={s.container}>
            <h1 className={s.titleSearch}>{dataExist}</h1>

            <section className={s.searchItems}>
                {filteredData.map(item => (
                    <MedicineDetails
                        className={'className'}
                        key={item.id}
                        data={item}
                    />
                ))}
            </section>
        </main>
    )
}
