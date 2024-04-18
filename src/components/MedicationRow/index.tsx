import { useContext } from 'react'
import { formatData } from '../../functions/formatData'
import { Medication } from '../../types/responseData'
import { SelectedMedicationContext, SelectedMedicationContextType } from '../../contexts/SelectedMedication'

type MedicationRowProps = {
  medication: Medication
}

export function MedicationRow({ medication }: MedicationRowProps) {

  const { setSelectedMedication } = useContext(SelectedMedicationContext) as SelectedMedicationContextType

  return (
    <tr onClick={() => setSelectedMedication(medication)}>
      <td>{formatData.name(medication.name)}</td>
      <td>{formatData.name(medication.company)}</td>
      <td>{formatData.date(medication.published_at)}</td>
    </tr>
  )
} 
