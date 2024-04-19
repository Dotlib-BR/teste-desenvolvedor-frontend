import { useCallback, useEffect, useState } from 'react'
import api from '../services/api'

import { Published } from '../interface/published'
import { SelectedMedicine } from '../interface/selected-medicine-prop'
import { CurrentItems } from '../interface/current-items'
import ButtonPagination from '../components/button-pagination'

export default function useApi() {
    const [medicine, setMedicine] = useState([])
    const [items, setItems] = useState()
    const [filter, setFilter] = useState<string>('recent')
    const [selectedMedicine, setSelectedMedicine] = useState<SelectedMedicine>()
    const [page, setPage] = useState<number>(1)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true)

    const itemsPerPage = 10
    const indexOfLastItem = page * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = medicine.slice(indexOfFirstItem, indexOfLastItem)
    const total = Math.ceil(medicine.length / itemsPerPage)

    useEffect(() => {
        if (isInitialLoad && medicine && medicine.length > 0) {
            setSelectedMedicine(medicine[0])
            setIsInitialLoad(false)
        }
    }, [isInitialLoad, medicine])

    const fetchMedicine = useCallback(async () => {
        try {
            const { data } = await api.get(`/data`)

            if (!data) return

            const filterFunctions: {
                [key: string]: (a: Published, b: Published) => number
            } = {
                recent: (a, b) =>
                    new Date(b.published_at).getTime() -
                    new Date(a.published_at).getTime(),
                ancient: (a, b) =>
                    new Date(a.published_at).getTime() -
                    new Date(b.published_at).getTime(),
            }

            if (filterFunctions[filter]) {
                const sortedData = data.slice().sort(filterFunctions[filter])
                setMedicine(sortedData)
            }

            setItems(data)
        } catch (error) {
            console.error(error)
        }
    }, [filter])

    useEffect(() => {
        fetchMedicine()
    })

    function nextPage() {
        setPage(prevPage => Math.min(prevPage + 1, total))
    }

    function prevPage() {
        setPage(prevPage => Math.max(prevPage - 1, 1))
    }

    function goToPage(pageNumber: number) {
        setPage(pageNumber)
    }

    function renderPageNumbers() {
        const numbers = []
        for (let i = 1; i <= total; i++) {
            const isActive = i === page
            numbers.push(
                <ButtonPagination
                    key={i}
                    pageNumber={i}
                    isActive={isActive}
                    onClick={() => goToPage(i)}
                />,
            )
        }
        return numbers
    }

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

        if (window.innerWidth < 767) {
            setIsModalOpen(true)
        }
    }

    function closeModal() {
        setIsModalOpen(false)
    }

    return {
        medicine,
        selectedMedicine,
        page,
        filter,
        isModalOpen,
        currentItems,
        total,
        indexOfLastItem,
        items,
        setPage,
        setFilter,
        setIsModalOpen,
        nextPage,
        prevPage,
        goToPage,
        renderPageNumbers,
        closeModal,
        setSelectedMedicine,
        handleSelectItem,
    }
}
