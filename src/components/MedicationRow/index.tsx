import { formatData } from '../../functions/formatData'
import { Medication } from '../../types/responseData'

type MedicationRowProps = {
  medication: Medication
}

export function MedicationRow({ medication }: MedicationRowProps) {
  return (
    <tr>
      <td>{formatData.name(medication.name)}</td>
      <td>{formatData.name(medication.company)}</td>
      <td>{formatData.date(medication.published_at)}</td>
    </tr>
  )
} 
