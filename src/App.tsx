import './App.css';
import {DataContextProvider} from './Context/DataContext';
import QueryMedication from './Components/QueryMedication/QueryMedication';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Medication from './Components/Medication/MedicationComponent';

function App() {

  return (
    <BrowserRouter>
      <DataContextProvider>
        <main>
          <Routes>
            <Route path='/' element={<QueryMedication/>}/>
            <Route path='/medication/:id' element={<Medication/>}/>
            <Route path='*' element={<div>Página não encontrada</div>}/>
          </Routes>
        </main>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App;
