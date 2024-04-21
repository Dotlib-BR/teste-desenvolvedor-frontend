import { Reducer } from "react"
import { MedicationState } from "./initialState"
import { Actions } from "./types"

export type MedicationReducer = Reducer<MedicationState, Actions>

export const reducer: MedicationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MEDICATION_DATA':
      return {...state, medicationData: action.payload}
    case 'SET_SELECTED_MEDICATION':
      return {...state, selectedMedication: action.payload}
    case 'SET_ERROR':
      return {...state, error: action.payload}
    case 'SET_VALUE_SEARCHED':
      return {...state, search: action.payload}
    default:
      return {...state};
  }
}