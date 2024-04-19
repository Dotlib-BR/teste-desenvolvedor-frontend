import { CurrentItems } from './current-items'
import { Items } from './items'
import { Medicine } from './medicine'
import { SelectedMedicine } from './selected-medicine-prop'

export interface ContextInterface {
    medicine: Medicine[]
    items: Items[] | undefined
    selectedMedicine: SelectedMedicine | undefined
    page: number
    filter: string
    isModalOpen: boolean
    currentItems: CurrentItems[]
    total: number
    indexOfLastItem: number
    setPage: (page: number) => void
    setFilter: (filter: string) => void
    setIsModalOpen: (isOpen: boolean) => void
    nextPage: () => void
    prevPage: () => void
    goToPage: (pageNumber: number) => void
    renderPageNumbers: () => React.ReactNode
    closeModal: () => void
    setSelectedMedicine: (medicine: SelectedMedicine) => void
    handleSelectItem: (item: CurrentItems) => void
}
