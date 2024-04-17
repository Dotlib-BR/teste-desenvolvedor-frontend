import { useState } from 'react'
import { useContexts } from '../../../../contexts/useContexts'

export function useListProducts() {
  const { filterProducts } = useContexts()

  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 10
  const lastIndex = currentPage * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage

  const totalProducts = filterProducts.length
  const totalPages = Math.ceil(totalProducts / itemsPerPage)

  const currentProducts = filterProducts.slice(firstIndex, lastIndex)

  const pageButtons = Array.from({ length: totalPages }, (_, i) => ({
    pageNumber: i + 1,
    onClick: () => changePage(i + 1),
    disabled: currentPage === i + 1,
  }))

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return {
    changePage,
    nextPage,
    prevPage,
    currentProducts,
    totalPages,
    currentPage,
    lastIndex,
    pageButtons,
  }
}
