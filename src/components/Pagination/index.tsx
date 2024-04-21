import { useContext } from "react"
import { getAllMedications, getMedicationByCompany, getMedicationByName } from "../../functions/fetch_medications"
import { Paginationcontainer } from "./Styles"
import { MedicationContext, MedicationContextType } from "../../contexts/Medication"
import { ResponseData } from "../../types/responseData"

export const Pagination = () => {
  const { MedicationState: { medicationData, search }, MedicationDispatch } = useContext(MedicationContext) as MedicationContextType
  
  const currentPage = ( medicationData?.prev || 0) + 1

  const paginate = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const thisElement = e.target as HTMLSpanElement
    const page = thisElement.id === 'next-page' ? currentPage + 1 : currentPage - 1


    let data: ResponseData
    if (search.method === 'name') {
      data = await getMedicationByName(page, search.value)
    } else if (search.method === 'company') {
      data = await getMedicationByCompany(page, search.value)
    } else {
      data = await getAllMedications(page)
    }
    MedicationDispatch({ type: "SET_MEDICATION_DATA", payload: data })
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