import { useContext } from "react"
import { Medication } from "../../types/responseData"
import { DetailsContainer, Wrapper } from "./styles"
import { SelectedMedicationContext, SelectedMedicationContextType } from "../../contexts/SelectedMedication"

type MedicationDetaisProps = {
  medication: Medication
}

export function MedicationDetais({ medication }: MedicationDetaisProps) {
  
  const { setSelectedMedication } = useContext(SelectedMedicationContext) as SelectedMedicationContextType

  function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) {
      setSelectedMedication(null)
    }
  }

  return (
    <Wrapper onClick={(e) => closeModal(e)}>
      <DetailsContainer>
        <h1>{medication.name}</h1>
      </DetailsContainer>
    </Wrapper>
  )
}