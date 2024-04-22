import { useContext } from "react"
import { getMedications } from "../../functions/get_medications.ts"
import { Paginationcontainer } from "./Styles"
import { MedicationContext, MedicationContextType } from "../../contexts/Medication"
import { LoaderContext, LoaderContextType } from "../../contexts/Loader"

export const Pagination = () => {

  const { MedicationState: { medicationData, search: { value, method }, sort }, MedicationDispatch } = useContext(MedicationContext) as MedicationContextType
  const { setLoading } = useContext(LoaderContext) as LoaderContextType

  const currentPage = ( medicationData?.prev || 0) + 1

  const paginate = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const thisElement = e.target as HTMLSpanElement
    const page = thisElement.id === 'next-page' ? currentPage + 1 : currentPage - 1

    console.log(sort)
    console.log(value)
    console.log(method)

    setLoading(true)
    getMedications(page, sort, { method, value })
    .then((data) => { 
      setLoading(false)
      MedicationDispatch({ type: "SET_MEDICATION_DATA", payload: data })
    }).catch((error) => {
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
      {(!!medicationData?.data.length) && 
      <Paginationcontainer>
        { medicationData.prev && <span id='prev-page' onClick={(e) => paginate(e)}>{medicationData.prev}</span>}
        <span className="selected">{currentPage}</span>
        { medicationData.next && <span id='next-page' onClick={(e) => paginate(e)}>{medicationData.next}</span>}
      </Paginationcontainer>}
    </>
  )
}