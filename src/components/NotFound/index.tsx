import { useContext } from "react"
import { MedicationContext, MedicationContextType } from "../../contexts/Medication"
import { Container } from "./Styles"
import notFoundIcon from '../../img/not-found.png'
import { getAllMedications } from "../../functions/fetch_medications"
import { DEFAULT_PAGE } from "../../utils/pagination"
import { LoaderContext, LoaderContextType } from "../../contexts/Loader"

export const NotFound = () => {

  const { MedicationState: { medicationData }, MedicationDispatch } = useContext(MedicationContext) as MedicationContextType
  const { setLoading } = useContext(LoaderContext) as LoaderContextType 

  const fetchData = () => {
    setLoading(true)
    getAllMedications(DEFAULT_PAGE)
    .then((data) => {

      if (data.error) {
        MedicationDispatch({
          type: 'SET_ERROR',
          payload: {
            error: data.error,
            errorMsg: data.errorMsg
          }
        })
        setLoading(false)
        return
      }

      MedicationDispatch({ type: "SET_MEDICATION_DATA", payload: data })
      MedicationDispatch({ type: "SET_VALUE_SEARCHED", payload: { method: "none", value: '' } })
      setLoading(false)
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