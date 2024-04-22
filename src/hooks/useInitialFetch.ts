import { useContext, useEffect } from "react"
import { LoaderContext, LoaderContextType } from "../contexts/Loader"
import { MedicationContext, MedicationContextType } from "../contexts/Medication"
import { getMedications } from "../functions/get_medications.ts"
import { DEFAULT_PAGE, DEFAULT_SORT } from "../utils/pagination"

export const useInitialFetch = () => {

  const { MedicationDispatch } = useContext(MedicationContext) as MedicationContextType
  const { setLoading } = useContext(LoaderContext) as LoaderContextType

  useEffect(() => {
    setLoading(true)
    getMedications(DEFAULT_PAGE, DEFAULT_SORT)
    .then((data) => {
      MedicationDispatch({ type: "SET_MEDICATION_DATA", payload: data })
      MedicationDispatch({ type: "SET_VALUE_SEARCHED", payload: { method: "none", value: '' } })
      MedicationDispatch({ type: 'SET_SORT', payload: DEFAULT_SORT})
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
  }, [MedicationDispatch, setLoading])
}