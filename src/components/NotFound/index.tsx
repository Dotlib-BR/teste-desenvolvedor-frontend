import { useContext } from "react"
import { MedicationContext, MedicationContextType } from "../../contexts/Medication"
import { Container } from "./Styles"
import notFoundIcon from '../../img/not-found.png'
import { getAllMedications } from "../../functions/fetch_medications"
import { DEFAULT_PAGE } from "../../utils/pagination"

export const NotFound = () => {

  const { MedicationState: { medicationData }, MedicationDispatch } = useContext(MedicationContext) as MedicationContextType

  const fetchData = () => {
    getAllMedications(DEFAULT_PAGE)
    .then((data) => {
      MedicationDispatch({ type: "SET_MEDICATION_DATA", payload: data })
      MedicationDispatch({ type: "SET_VALUE_SEARCHED", payload: { method: "none", value: '' } })
    })
  }

  return (
    <>
      {!!medicationData?.data.length ||
        <Container>
          <div>
            <h3>Não encontrado...</h3>
            <img src={notFoundIcon} alt="not found icon" />
          </div>
          <button onClick={fetchData}>voltar ao inicio</button>
        </Container>}
    </>
  )
}