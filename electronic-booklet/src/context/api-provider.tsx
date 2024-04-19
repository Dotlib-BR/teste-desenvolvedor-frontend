import React, { createContext, useContext } from 'react'
import useApi from '../hook/useApi'
import { ContextInterface } from '../interface/context-interface'

const ApiContext = createContext<ContextInterface>({
    medicine: [],
    items: [],
    selectedMedicine: undefined,
    page: 1,
    filter: 'recent',
    isModalOpen: false,
    currentItems: [],
    total: 0,
    indexOfLastItem: 0,
    setPage: () => {},
    setFilter: () => {},
    setIsModalOpen: () => {},
    nextPage: () => {},
    prevPage: () => {},
    goToPage: () => {},
    renderPageNumbers: () => null,
    closeModal: () => {},
    setSelectedMedicine: () => {},
    handleSelectItem: () => {},
})

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
    const api = useApi()

    return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>
}

export const useApiContext = (): ContextInterface => {
    const context = useContext(ApiContext)
    return context
}
