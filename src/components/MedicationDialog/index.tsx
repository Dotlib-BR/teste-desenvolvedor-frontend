import { useContext } from "react"
import { CloseIcon, DescriptionContainer, DescriptionRow, DetailsContainer, DetailsWrapper } from "./styles"
import { MedicationContext, MedicationContextType } from "../../contexts/Medication"
import { formatDate, formatName } from "../../functions/format_data"

export const  MedicationDialog = () => {

  const { MedicationState: { selectedMedication }, MedicationDispatch } = useContext(MedicationContext) as MedicationContextType 

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      MedicationDispatch({ type: "SET_SELECTED_MEDICATION", payload: null })
    }
  }

  console.dir(selectedMedication)

  return (
    <DetailsWrapper onClick={(e) => closeModal(e)} $display={!!selectedMedication}>
      <DetailsContainer>
        <CloseIcon>
          <i className="bi bi-x-lg" onClick={() => MedicationDispatch({ type: "SET_SELECTED_MEDICATION", payload: null })}></i>
        </CloseIcon>
        <h3>{formatName(selectedMedication?.name)}</h3>
        <DescriptionContainer>
          <DescriptionRow>
            <p>Laboratório:</p> 
            <p>{formatName(selectedMedication?.company)}</p>
          </DescriptionRow>
          <DescriptionRow>
            <p>Data de publicação:</p> 
            <p>{formatDate(selectedMedication?.published_at)}</p>
          </DescriptionRow>
          <DescriptionRow>
            <p>Bula profissional:</p> 
            <p><a href='pdf_sample.pdf' download={true}>Download PDF</a></p>
          </DescriptionRow>
          <DescriptionRow>
            <p>Bula paciente:</p> 
            <p><a href='pdf_sample.pdf' download={true}>Download PDF</a></p>
          </DescriptionRow>
        </DescriptionContainer>
      </DetailsContainer>
    </DetailsWrapper>
  )
}