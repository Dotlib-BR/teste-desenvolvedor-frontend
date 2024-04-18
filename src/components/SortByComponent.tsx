import React from 'react'

interface SortProps {
  sortBy: 'published_at' | 'name'
  sortOrder: 'asc' | 'desc'
  setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>
  setSortBy: React.Dispatch<React.SetStateAction<'published_at' | 'name'>>
}

interface SortButtonProps {
  field: 'published_at' | 'name'
  label: string
  sortBy: 'published_at' | 'name'
  sortOrder: 'asc' | 'desc'
  setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>
  setSortBy: React.Dispatch<React.SetStateAction<'published_at' | 'name'>>
}

const SortButton = ({
  field,
  label,
  sortBy,
  sortOrder,
  setSortOrder,
  setSortBy,
}: SortButtonProps) => {
  const handleSortBy = () => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
  }

  const isActive = sortBy === field

  return (
    <button
      className={`flex items-center space-x-1 p-4 my-5 rounded-lg text-sm font-semibold ${isActive ? 'bg-yellow-500 text-black' : ''}`}
      onClick={handleSortBy}
    >
      {isActive && sortOrder === 'asc'}
      {isActive && sortOrder === 'desc'}
      {label}
    </button>
  )
}

export const SortByComponent = ({
  sortBy,
  sortOrder,
  setSortOrder,
  setSortBy,
}: SortProps) => {
  return (
    <section className="flex justify-center mt-4 space-x-4">
      <SortButton
        field="published_at"
        label="Mais Recente"
        sortBy={sortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        setSortBy={setSortBy}
      />
      <SortButton
        field="name"
        label="Nome"
        sortBy={sortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        setSortBy={setSortBy}
      />
    </section>
  )
}
