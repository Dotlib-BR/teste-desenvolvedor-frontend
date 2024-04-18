import React, { useEffect, useState, useMemo } from 'react'
import { useMedicines } from '../hooks/useMedicines'
import { SearchBar } from './SearchBar'
import { PaginationComponent } from './PaginationComponent'
import { useDebounce } from 'use-debounce'
import { SortByComponent } from './SortByComponent'
import { LeafletDownloadComponent } from './LeafletDownloadComponent'

export function MedicinesComponent() {
  const { handleGetLeaflet, leaflets } = useMedicines()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchMessage, setSearchMessage] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [sortBy, setSortBy] = useState<'published_at' | 'name'>('published_at')

  const [debouncedSearch] = useDebounce(searchTerm, 1000)

  useEffect(() => {
    const fetchData = async () => {
      await handleGetLeaflet()
    }
    fetchData()
  }, [handleGetLeaflet])

  const filteredLeaflets = useMemo(() => {
    const filteredMedicines = leaflets.filter(
      (medicine) =>
        medicine.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        medicine.company.toLowerCase().includes(debouncedSearch.toLowerCase())
    )

    const sortedMedicines = filteredMedicines.sort((a, b) => {
      const compareValueA =
        sortBy === 'published_at' ? new Date(a.published_at).getTime() : a.name
      const compareValueB =
        sortBy === 'published_at' ? new Date(b.published_at).getTime() : b.name

      if (
        typeof compareValueA === 'string' &&
        typeof compareValueB === 'string'
      ) {
        if (sortOrder === 'asc') {
          return compareValueA.localeCompare(compareValueB)
        } else {
          return compareValueB.localeCompare(compareValueA)
        }
      } else {
        const numberA = Number(compareValueA)
        const numberB = Number(compareValueB)

        if (sortOrder === 'asc') {
          return numberA - numberB
        } else {
          return numberB - numberA
        }
      }
    })

    setTotalPages(Math.ceil(sortedMedicines.length / 10))
    return sortedMedicines
  }, [leaflets, debouncedSearch, sortBy, sortOrder])

  useEffect(() => {
    setSearchMessage(
      filteredLeaflets.length === 0 ? 'Nenhum resultado encontrado.' : ''
    )
  }, [filteredLeaflets])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <main>
      <section className="items-center justify-center m-auto pt-64 pb-28 w-[80%]">
        <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
        {searchMessage && <p>{searchMessage}</p>}
        <SortByComponent
          sortBy={sortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setSortBy={setSortBy}
        />
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {filteredLeaflets
            .slice((currentPage - 1) * 10, currentPage * 10)
            .map((leaflet) => (
              <section
                className="bg-[#ffd900] border border-gray-800 rounded-lg shadow"
                key={leaflet.id}
              >
                <div className="mx-5 my-5">
                  <h5 className="text-[22px] font-bold tracking-tight text-gray-900">
                    {leaflet.company}
                  </h5>
                  <h3 className="text-[18px] font-semibold ">
                    {new Intl.DateTimeFormat('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    }).format(new Date(leaflet.published_at))}{' '}
                    às{' '}
                    {new Intl.DateTimeFormat('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                    }).format(new Date(leaflet.published_at))}
                  </h3>
                  <div className="mt-5 h-full w-full uppercase">
                    <h1 className="font-normal text-gray-700 tracking-tight text-[16px]">
                      {leaflet.name}
                    </h1>
                  </div>
                </div>
                <div className="mx-5 my-5 flex justify-end">
                  <LeafletDownloadComponent leaflet={leaflet} />
                </div>
              </section>
            ))}
        </section>
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </section>
    </main>
  )
}
