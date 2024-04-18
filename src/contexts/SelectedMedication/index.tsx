import { Medication } from "../../types/responseData"
import { Dispatch, SetStateAction, createContext, useState } from "react"

export type SelectedMedicationContextType = {
  selectedMedication: Medication | null
  setSelectedMedication: Dispatch<SetStateAction<Medication | null>>
}

type SelectedMedicationProviderProps = {
  children: React.ReactNode
}

export const SelectedMedicationContext = createContext<SelectedMedicationContextType | null>(null)

export function SelectedMedicationProvider({ children }: SelectedMedicationProviderProps) {
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null)

  return (
    <SelectedMedicationContext.Provider value={{selectedMedication, setSelectedMedication}}>
      {children}
    </SelectedMedicationContext.Provider>
  )
} 
