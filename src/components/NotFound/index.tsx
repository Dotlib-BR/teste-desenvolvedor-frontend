import { useContext } from "react"
import { MedicationContext, MedicationContextType } from "../../contexts/Medication"
import { Container } from "./Styles"
import { getMedications } from "../../functions/get_medications.ts"
import { DEFAULT_PAGE, DEFAULT_SORT } from "../../utils/pagination"
import { LoaderContext, LoaderContextType } from "../../contexts/Loader"
import notFoundIcon from '../../img/not-found.png'

export const NotFound = () => {

  const { MedicationState: { medicationData }, MedicationDispatch } = useContext(MedicationContext) as MedicationContextType
  const { setLoading } = useContext(LoaderContext) as LoaderContextType 

  const fetchData = () => {
    setLoading(true)
    getMedications(DEFAULT_PAGE, DEFAULT_SORT)
    .then((data) => { 
      setLoading(false)
      MedicationDispatch({ type: "SET_MEDICATION_DATA", payload: data })
      MedicationDispatch({ type: "SET_VALUE_SEARCHED", payload: { method: "none", value: '' } })
      MedicationDispatch({ type: 'SET_SORT', payload: DEFAULT_SORT})
    }).catch((error) => {
      setLoading(false)
      console.log(error)
      MedicationDispatch({
        type: 'SET_ERROR',
        payload: {
          error: true,
          errorMsg: "Algo deu errado. Tente novamente mais tarde"
        }
      })
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