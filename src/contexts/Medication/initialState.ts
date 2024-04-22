import { FetchErrors } from "../../types/erros"
import { Medication, MedicationData, SearchByType, SortBy } from "../../types/responseData"
import { DEFAULT_SORT } from "../../utils/pagination"

export type MedicationState = {
  medicationData: MedicationData | null
  selectedMedication: Medication | null
  error: {
    error: boolean
    errorMsg: FetchErrors
  }
  search: {
    value: string
    method: SearchByType
  }
  sort: SortBy
}

export const initialState: MedicationState = {
  medicationData: null,
  selectedMedication: null,
  error: {
    error: false,
    errorMsg: 'Algo deu errado. Tente novamente mais tarde'
  },
  search: {
    value: '',
    method: 'none'
  },
  sort: DEFAULT_SORT
}