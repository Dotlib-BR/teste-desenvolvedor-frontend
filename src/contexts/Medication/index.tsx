import { createContext, useReducer } from "react"
import { MedicationState, initialState } from "./initialState"
import { reducer } from "./reducer"
import { Actions } from "./types"

type Props = {
  children: React.ReactNode
}

export type MedicationContextType = {
  MedicationState: MedicationState
  MedicationDispatch: React.Dispatch<Actions>
}

export const MedicationContext = createContext<MedicationContextType | null>(null)

export const MedicationProvider = ({ children }: Props) => {
  const [MedicationState, MedicationDispatch] = useReducer(reducer, initialState) 

  return (
    <MedicationContext.Provider value={{MedicationState, MedicationDispatch}}>
      {children}
    </MedicationContext.Provider>
  )
}