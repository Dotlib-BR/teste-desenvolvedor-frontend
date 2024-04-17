import { useEffect, useState } from "react"

import { Medicine } from "@/types/medicine"

// Components
import { MedicineList } from "@/components/medicine-list"
import { Pagination } from "@/components/pagination"
import { Search } from "@/components/search"
import { Header } from "@/components/header"

const App = () => {
  const [data, setData] = useState<Medicine[]>([])
  const [loading, setLoading] = useState(true)

  const [filteredData, setFilteredData] = useState<Medicine[]>([])
  const [filterInput, setFilterInput] = useState("")

  const [pagination, setPagination] = useState({
    page: 1,
    start: 0,
    limit: 9,
  })

  useEffect(() => {
    const getData = async () => {
      const req = await fetch("http://localhost:3000/data")
      const data = (await req.json()) as Medicine[]
      if (!req.ok) {
        return []
      }

      setData(
        data.sort((a, b) => {
          if (a.published_at > b.published_at) {
            return 1
          } else {
            return -1
          }
        }),
      )
      setLoading(false)
    }
    getData()
  }, [])

  const handleNextClick = () => {
    setPagination((prev) => {
      return {
        ...prev,
        page: prev.page + 1,
        limit: prev.limit + 10,
        start: prev.start + 10,
      }
    })
  }

  const handlePrevClick = () => {
    setPagination((prev) => {
      return {
        ...prev,
        page: prev.page - 1,
        limit: prev.limit - 10,
        start: prev.start - 10,
      }
    })
  }

  const handleFilter = () => {
    if (filterInput.trim() === "") return
    const filteredData = [...data].filter(
      (item) =>
        item.name
          .toLocaleLowerCase()
          .includes(filterInput.toLocaleLowerCase()) ||
        item.company
          .toLocaleLowerCase()
          .includes(filterInput.toLocaleLowerCase()),
    )

    if (filteredData.length === 0) {
      alert("Nenhum resultado para consulta")
    }

    setPagination({ page: 1, limit: 9, start: 0 })
    setFilteredData(filteredData)
  }

  useEffect(() => {
    if (filterInput === "") {
      setFilteredData([])
    }
  }, [filterInput])

  return (
    <main className="min-h-dvh w-full p-4">
      <div className="container mx-auto flex min-h-[calc(100dvh-32px)] flex-col space-y-4 rounded-md bg-white p-4">
        <Header />

        <Search onChange={setFilterInput} onFilter={handleFilter} />

        <div className="flex-1 space-y-2">
          {loading && <div>Carregando medicamentos...</div>}
          {!loading && filteredData.length === 0 && (
            <MedicineList
              medicines={data}
              start={pagination.start}
              limit={pagination.limit}
            />
          )}
          {filteredData.length > 0 && (
            <MedicineList
              medicines={filteredData}
              limit={pagination.limit}
              start={pagination.start}
            />
          )}
        </div>

        <Pagination
          pageNum={pagination.page}
          dataLength={filterInput ? filteredData.length : data.length}
          onNextClick={handleNextClick}
          onPrevClick={handlePrevClick}
        />
      </div>
    </main>
  )
}

export default App
