import { FetchErrors } from "../../types/errors"
import { Medication, MedicationData, SearchByType } from "../../types/responseData"

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
  }
}