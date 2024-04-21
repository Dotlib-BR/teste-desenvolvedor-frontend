import { useContext } from "react"
import { MedicationContext, MedicationContextType } from "../../contexts/Medication"
import { formatDate, formatName } from "../../functions/format_data"
import { TableContainer, TableRow } from "./Styles"
import { DEFAULT_LIMIT } from "../../utils/pagination"

export const MedicationTable = () => {

  const { MedicationState: { medicationData }, MedicationDispatch } = useContext(MedicationContext) as MedicationContextType

  return (
    <TableContainer>
      {!!medicationData?.data.length && 
        <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Laboratório</th>
                <th>Data de publicação</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(' '.repeat(DEFAULT_LIMIT)).map((value, index) => (
                <TableRow $hover={!!medicationData.data[index]} key={index} onClick={() => MedicationDispatch({ type: 'SET_SELECTED_MEDICATION', payload: medicationData.data[index] })}>
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