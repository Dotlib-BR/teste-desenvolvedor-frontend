import React from 'react'

import { Item, PaginationContainer } from './styles'

import { QueryParams } from '@/modules/useMedication/useMedication'

type PaginationProps = {
  first: number
  last: number
  pages: number
  prev: number | null
  next: number | null
  handleGetNewData: () => void
  handleSetQueryParams: (data: Partial<QueryParams>) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  pages,
  next,
  handleGetNewData,
  handleSetQueryParams,
}) => {
  const currentPage = next ? next - 1 : pages
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1)

  return (
    <PaginationContainer>
      {pageNumbers.map((pageNumber) => {
        return (
          <Item
            key={pageNumber}
            $isCurrentPage={currentPage === pageNumber}
            disabled={currentPage === pageNumber}
            onClick={() => {
              handleSetQueryParams({
                page: `_page=${pageNumber}`,
              })
              handleGetNewData()
            }}
          >
            {pageNumber}
          </Item>
        )
      })}
    </PaginationContainer>
  )
}
