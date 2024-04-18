import { useEffect, useState } from 'react'
import MedicineDetails from '../../../../components/medicine-details'
import api from '../../../../services/api'

import { SelectedMedicine } from '../../../../interface/selected-medicine-prop'
import { Medicine } from '../../../../interface/medicine'
import { Published } from '../../../../interface/published'
import { CurrentItems } from '../../../../interface/current-items'

import s from './style.module.sass'

const itemsPerPage = 10

export default function MedicineLeaflet() {
    const [medicine, setMedicine] = useState<Medicine[]>([])
    const [selectedMedicine, setSelectedMedicine] = useState<SelectedMedicine>()
    const [page, setPage] = useState<number>(1)
    const [filter, setFilter] = useState<string>('recent')

    async function handleMedicine() {
        try {
            const { data } = await api.get(`/data`)

            if (!data) return

            if (filter === 'recent') {
                const recents = data.sort(
                    (a: Published, b: Published) =>
                        new Date(b.published_at).getTime() -
                        new Date(a.published_at).getTime(),
                )
                setMedicine(recents)
                setSelectedMedicine(recents[0])
            } else if (filter === 'ancient') {
                const ancient = data.sort(
                    (a: Published, b: Published) =>
                        new Date(a.published_at).getTime() -
                        new Date(b.published_at).getTime(),
                )
                setMedicine(ancient)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleMedicine()
    }, [filter])

    function handleSelectItem(item: CurrentItems) {
        const selected: SelectedMedicine = {
            id: item.id,
            name: item.name,
            published_at: item.published_at || '',
            company: item.company || '',
            active_principles: item.active_principles || [],
            documents: item.documents || [],
            medical_image: item.medical_image || '',
            company_image: item.company_image || '',
        }
        setSelectedMedicine(selected)
    }

    const indexOfLastItem = page * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = medicine.slice(indexOfFirstItem, indexOfLastItem)
    const total = Math.ceil(medicine.length / itemsPerPage)

    function nextPage() {
        setPage(prevPage => prevPage + 1)
    }

    function prevPage() {
        setPage(prevPage => prevPage - 1)
    }

    function goToPage(pageNumber: number) {
        setPage(pageNumber)
    }

    function renderPageNumbers() {
        const numbers = []
        for (let i = 1; i <= total; i++) {
            const btnClass = i === page ? s.activeBtn : s.btnNotActive
            numbers.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={btnClass}
                >
                    {i}
                </button>,
            )
        }

        return numbers
    }

    return (
        <>
            <section className={s.container}>
                <div>
                    <select
                        className={s.filterSelect}
                        name='filter'
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value='recent'>Mais recentes</option>
                        <option value='ancient'>Mais antigos</option>
                    </select>

                    <div className={s.containerMedicine}>
                        {currentItems.map((item: CurrentItems) => (
                            <div
                                className={`${s.medicineNameBox} ${
                                    selectedMedicine!.id === item.id
                                        ? s.selectedMedicine
                                        : ''
                                }`}
                                onClick={() => handleSelectItem(item)}
                                key={item.id}
                            >
                                <figure className={s.brandImageContainer}>
                                    <img
                                        src={item.company_image}
                                        alt='multilab'
                                        className={s.brandImage}
                                    />
                                </figure>
                                <h2 className={s.medicineName}>{item.name}</h2>
                            </div>
                        ))}
                    </div>

                    <div className={s.pagination}>
                        <button
                            onClick={prevPage}
                            disabled={page === 1}
                            className={page === 1 ? s.disabledBtn : s.active}
                        >
                            Anterior
                        </button>
                        {renderPageNumbers()}
                        <button
                            onClick={nextPage}
                            disabled={indexOfLastItem >= medicine.length}
                            className={
                                indexOfLastItem >= medicine.length
                                    ? s.disabledBtn
                                    : s.active
                            }
                        >
                            Próxima
                        </button>
                    </div>
                </div>

                {selectedMedicine && (
                    <MedicineDetails data={selectedMedicine} />
                )}
            </section>
        </>
    )
}
