import { useContext, useEffect } from "react"
import { LoaderContext, LoaderContextType } from "../contexts/Loader"
import { MedicationContext, MedicationContextType } from "../contexts/Medication"
import { getAllMedications } from "../functions/fetch_medications"
import { DEFAULT_PAGE } from "../utils/pagination"

export const useInitialFetch = () => {

  const { MedicationDispatch } = useContext(MedicationContext) as MedicationContextType
  const { setLoading } = useContext(LoaderContext) as LoaderContextType

  useEffect(() => {
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
  }, [MedicationDispatch, setLoading])
}