import { Medications } from "./components/Medications"
import { Pagination } from "./components/Pagination"
import { SearchBar } from "./components/SearchBar"

export const App = () => {
  return (
    <>
      <SearchBar />
      <Medications />
      <Pagination />
    </>
  )
}
