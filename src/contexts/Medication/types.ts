import { FetchErrors } from "../../types/erros"
import { Medication, MedicationData, SearchByType } from "../../types/responseData"

export type Actions = SetMedicationData | SetSelectedMedication | SetError | SetValueSearched
type SetMedicationData = {
  type: 'SET_MEDICATION_DATA'
  payload: MedicationData
}

type SetSelectedMedication = {
  type: 'SET_SELECTED_MEDICATION'
  payload: Medication | null
}

type SetError = {
  type: 'SET_ERROR'
  payload: {
    error: boolean
    errorMsg: FetchErrors
  }
}

type SetValueSearched = {
  type: 'SET_VALUE_SEARCHED'
  payload: {
    value: string
    method: SearchByType
  }
}