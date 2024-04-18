import React, { useEffect, useState, useMemo } from 'react'
import { useMedicines } from '../hooks/useMedicines'
import { SearchBar } from './SearchBar'
import { PaginationComponent } from './PaginationComponent'
import { useDebounce } from 'use-debounce'

export function MedicinesComponent() {
  const { handleGetLeaflet, leaflets } = useMedicines()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchMessage, setSearchMessage] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [debouncedSearch] = useDebounce(searchTerm, 1500)

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
      return (
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      )
    })

    setTotalPages(Math.ceil(sortedMedicines.length / 10))
    return sortedMedicines
  }, [leaflets, debouncedSearch])

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
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {filteredLeaflets
            .slice((currentPage - 1) * 10, currentPage * 10)
            .map((leaflet) => (
              <section
                className="bg-[#ffd900] border border-gray-800 rounded-lg shadow h-full"
                key={leaflet.id}
              >
                <div className="mx-5 my-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    {leaflet.company}
                  </h5>
                  <h3>{leaflet.published_at}</h3>
                  <div className="border overflow-hidden">
                    <h1 className="font-normal text-gray-700 tracking-tight text-[16px] my-2">
                      {leaflet.name}
                    </h1>
                  </div>
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
