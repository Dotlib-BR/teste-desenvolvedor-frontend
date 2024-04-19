import { useLocation } from 'react-router-dom'
import { useApiContext } from '../../context/api-provider'

import MedicineDetails from '../../components/medicine-details'

import s from './style.module.sass'
import { SelectedMedicineData } from '../../interface/selected-medicine-prop'

export default function Query() {
    const { medicine } = useApiContext()
    const location = useLocation()
    const search = new URLSearchParams(location.search).get('search')

    const filteredData = medicine.filter(item => item.name === search)

    if (filteredData.length === 0) {
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
                {filteredData.map(item => (
                    <MedicineDetails key={item.id} data={item} />
                ))}
            </section>
        </main>
    )
}
