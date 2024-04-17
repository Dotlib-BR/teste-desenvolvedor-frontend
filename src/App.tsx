import './App.css';
import {DataContextProvider} from './Context/DataContext';
import QueryMedication from './Components/QueryMedication/QueryMedication';

function App() {

  return (
    <DataContextProvider>
      <main>
        <QueryMedication/>
      </main>
    </DataContextProvider>
  )
}

export default App;
