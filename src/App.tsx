import { useEffect, useState } from "react"

import { Medicine } from "@/types/medicine"

// Components
import { MedicineList } from "@/components/medicine-list"
import { Pagination } from "@/components/pagination"
import { Search } from "@/components/search"
import { Header } from "@/components/header"
import { useMedicines } from "./lib/query"
import { useToast } from "./components/ui/use-toast"
import { title } from "process"

const App = () => {
  const { data, isLoading } = useMedicines()

  const [filteredData, setFilteredData] = useState<Medicine[]>([])
  const [filterInput, setFilterInput] = useState("")
  const [pagination, setPagination] = useState({
    page: 1,
    start: 0,
    limit: 9,
  })

  const { toast } = useToast()

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
    if (!data) return
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
      toast({
        title: "Erro",
        description: "Nenhum resultado para consulta",
        variant: "destructive",
      })
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
          {isLoading && <div>Carregando medicamentos...</div>}
          {!isLoading && filteredData.length === 0 && (
            <MedicineList
              medicines={data ? data : []}
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
          dataLength={
            filterInput ? filteredData.length : (data?.length as number)
          }
          onNextClick={handleNextClick}
          onPrevClick={handlePrevClick}
        />
      </div>
    </main>
  )
}

export default App
