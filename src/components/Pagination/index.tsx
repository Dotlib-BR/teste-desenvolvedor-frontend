import { getMedications } from "../../functions/getMedication"
import { Data } from "../../types/responseData"
import { MedicationRow } from "../MedicationRow"
import { Paginationcontainer } from "./Styles"

type PaginationProps = {
  valueSearched: string
  medicationsData: Data | undefined
  setMedications: (value: Data) => void
}

export function Pagination({ valueSearched,  medicationsData, setMedications }: PaginationProps) {

  async function nextPage() {
    const data = await getMedications(valueSearched, 'name', currentPage + 1)
    setMedications(data)
  }

  async function prevPage() {
    const data = await getMedications(valueSearched, 'name', currentPage - 1) 
    setMedications(data)
  }

  const currentPage = ( medicationsData?.prev || 0) + 1

  return (
    <>
      <table>
        {!! medicationsData?.data.length && 
        <>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Laboratório</th>
              <th>Data de publicação</th>
            </tr>
          </thead>
          <tbody>
            { medicationsData.data.map((medication, index) => (
              <MedicationRow key={index} medication={medication}/>
            ))}
          </tbody>
        </>}
      </table>

      {(!! medicationsData?.data.length) && 
      <Paginationcontainer>
        { medicationsData.prev && <span onClick={prevPage}>{ medicationsData.prev}</span>}
        <span className="selected">{currentPage}</span>
        { medicationsData.next && <span onClick={nextPage}>{ medicationsData.next}</span>}
      </Paginationcontainer>}
    </>
  )
}