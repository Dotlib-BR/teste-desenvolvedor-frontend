import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from './GlobalStyles.tsx'
import { SelectedMedicationProvider } from './contexts/SelectedMedication/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SelectedMedicationProvider>
    <GlobalStyles />
    <App />
  </SelectedMedicationProvider>
)
