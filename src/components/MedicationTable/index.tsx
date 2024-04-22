import { useContext } from "react"
import { MedicationContext, MedicationContextType } from "../../contexts/Medication"
import { formatDate, formatName } from "../../functions/format_data"
import { TableContainer, TableRow } from "./Styles"
import { DEFAULT_LIMIT, DEFAULT_PAGE } from "../../utils/pagination"
import { LoaderContext, LoaderContextType } from "../../contexts/Loader"
import { getMedications } from "../../functions/get_medications.ts"
import { Medication, SortBy } from "../../types/responseData"

export const MedicationTable = () => {

  const { MedicationState: { medicationData, search: { method, value } }, MedicationDispatch } = useContext(MedicationContext) as MedicationContextType
  const { setLoading } = useContext(LoaderContext) as LoaderContextType

  const sortData = (e: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => {
    const target = e.target as HTMLTableCellElement
    const sortBy = target.id as SortBy

    setLoading(true)
    getMedications(DEFAULT_PAGE, sortBy, {
      method,
      value
    })
    .then((data) => {
      MedicationDispatch({ type: "SET_MEDICATION_DATA", payload: data })
      MedicationDispatch({ type: "SET_VALUE_SEARCHED", payload: { method, value } })
      MedicationDispatch({ type: 'SET_SORT', payload: sortBy})
      setLoading(false)
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
      MedicationDispatch({
        type: 'SET_ERROR',
        payload: {
          error: true,
          errorMsg: 'Algo deu errado. Tente novamente mais tarde'
        }
      })
    })
  }

  const showDialog = (medicationData: Medication) => {
    MedicationDispatch({ type: 'SET_SELECTED_MEDICATION', payload: medicationData})

    window.scrollTo({
      top: window.innerHeight / 2,
      behavior: 'smooth'
    })
  }

  return (
    <TableContainer>
      {!!medicationData?.data.length && 
        <table>
            <thead>
              <tr>
                <th id='name' onClick={(e) => sortData(e)}>Nome</th>
                <th id='company' onClick={(e) => sortData(e)}>Laboratório</th>
                <th id='published_at' onClick={(e) => sortData(e)}>Data de publicação</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(' '.repeat(DEFAULT_LIMIT)).map((value, index) => (
                <TableRow $hover={!!medicationData.data[index]} key={index} onClick={() => showDialog(medicationData.data[index])}>
                  <td>{medicationData.data[index] ? formatName(medicationData.data[index].name) : value}</td>
                  <td>{medicationData.data[index] ? formatName(medicationData.data[index].company) : value}</td>
                  <td>{medicationData.data[index] ? formatDate(medicationData.data[index].published_at) : value}</td>
                </TableRow>
              ))}
            </tbody>
        </table>}
    </TableContainer>
  )
}