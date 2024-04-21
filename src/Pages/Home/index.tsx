import { SearchField } from "../../components/SearchField"
import { MedicationDialog } from "../../components/MedicationDialog"
import { Header } from "../../components/Header"
import { ErrorDialog } from "../../components/ErrorDialog"
import { Loader } from "../../components/Loader"
import { Pagination } from "../../components/Pagination"
import { MedicationTable } from "../../components/MedicationTable"
import { MainContainer } from "./Styles"
import { NotFound } from "../../components/NotFound"
import { Footer } from "../../components/Footer"
import { useInitialFetch } from "../../hooks/useInitialFetch"

export const Home = () => {

  useInitialFetch()

  return (
    <MainContainer>
      <Header />
      <SearchField />
      <MedicationTable />
      <Pagination />
      <NotFound />
      <Footer />
      <MedicationDialog />
      <Loader />
      <ErrorDialog />
    </MainContainer>
  )
}