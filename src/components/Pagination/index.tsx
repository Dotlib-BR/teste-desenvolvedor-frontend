import React from 'react'
import { Item, PaginationContainer } from './styles'

type PaginationProps = {
  first: number
  last: number
  pages: number
  prev: number | null
  next: number | null
  handleGetNewData: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  pages,
  next,
  handleGetNewData,
}) => {
  const currentPage = next ? next - 1 : pages
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1)

  return (
    <PaginationContainer>
      {pageNumbers.map((pageNumber) => {
        return (
          <Item
            key={pageNumber}
            isCurrentPage={currentPage === pageNumber}
            disabled={currentPage === pageNumber}
            onClick={() => handleGetNewData(pageNumber)}
          >
            {pageNumber}
          </Item>
        )
      })}
    </PaginationContainer>
  )
}
