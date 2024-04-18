import { getMedications } from "../../functions/getMedication"
import { Data } from "../../types/responseData"
import { MedicationRow } from "../MedicationRow"
import { Paginationcontainer } from "./Styles"

type PaginationProps = {
  valueSearched: string
  medications: Data | undefined
  setMedications: (value: Data) => void
}

export function Pagination({ valueSearched, medications, setMedications }: PaginationProps) {
  async function nextPage() {
    const data = await getMedications(valueSearched, 'name', currentPage + 1)
    setMedications(data)
  }

  async function prevPage() {
    const data = await getMedications(valueSearched, 'name', currentPage - 1) 
    setMedications(data)
  }

  const currentPage = (medications?.prev || 0) + 1

  console.log(medications)

  return (
    <>
      <table>
        {!!medications?.data.length && 
        <>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Laboratório</th>
              <th>Data de publicação</th>
            </tr>
          </thead>
          <tbody>
            {medications.data.map((medication, index) => (
              <MedicationRow key={index} medication={medication}/>
            ))}
          </tbody>
        </>}
      </table>

      {(!!medications?.data.length) && 
      <Paginationcontainer>
        {medications.prev && <span onClick={prevPage}>{medications.prev}</span>}
        <span className="selected">{currentPage}</span>
        {medications.next && <span onClick={nextPage}>{medications.next}</span>}
      </Paginationcontainer>}
    </>
  )
}