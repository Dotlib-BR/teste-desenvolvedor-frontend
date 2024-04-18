import { useContext } from "react"
import { MedicationDetais } from "./components/MedicationDetails"
import { SearchField } from "./components/SearchField"
import { SelectedMedicationContext, SelectedMedicationContextType } from "./contexts/SelectedMedication"

function App() {

  const { selectedMedication } = useContext(SelectedMedicationContext) as SelectedMedicationContextType

  return (
    <section className="main-container">
      <h1>Bulário Eletrônico</h1>
      <SearchField />
      {selectedMedication && <MedicationDetais medication={selectedMedication}/>}
    </section>
  )
}

export default App
