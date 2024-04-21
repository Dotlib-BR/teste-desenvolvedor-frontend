import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from './GlobalStyles.tsx'
import { MedicationProvider } from './contexts/Medication/index.tsx'
import { LoaderPropvider } from './contexts/Loader/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MedicationProvider>
    <LoaderPropvider>
      <GlobalStyles />
      <App />
    </LoaderPropvider>
  </MedicationProvider>
)
