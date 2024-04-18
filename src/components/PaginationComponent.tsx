import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface PaginationProps {
  currentPage: number
  totalPages: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const PageButton = ({
  onClick,
  disabled,
  active,
  children,
  isFirst,
  isLast,
  isNumber,
}: {
  onClick: () => void
  disabled: boolean
  active: boolean
  children: React.ReactNode
  isFirst: boolean
  isLast: boolean
  isNumber: boolean
}) => {
  const baseClasses = `flex items-center justify-center px-3 h-8 leading-tight bg-[#ffd900] font-semibold border hover:bg-[#ffe80d] hover:text-gray-700 border-zinc-800 ${
    active ? 'bg-yellow-600 text-black' : ''
  }`

  const roundedClasses = isFirst ? 'rounded-l-lg' : isLast ? 'rounded-r-lg' : ''
  const numberClasses = isNumber ? '' : roundedClasses

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${numberClasses}`}
    >
      {children}
    </button>
  )
}

export const PaginationComponent = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  return (
    <main>
      <nav className="flex justify-center mt-16">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <PageButton
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              active={false}
              isFirst={true}
              isLast={false}
              isNumber={false}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </PageButton>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index}>
              <PageButton
                onClick={() => setCurrentPage(index + 1)}
                disabled={false}
                active={currentPage === index + 1}
                isFirst={index === 0}
                isLast={index === totalPages - 1}
                isNumber={true}
              >
                {index + 1}
              </PageButton>
            </li>
          ))}
          <li>
            <PageButton
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              active={false}
              isFirst={false}
              isLast={true}
              isNumber={false}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </PageButton>
          </li>
        </ul>
      </nav>
    </main>
  )
}
