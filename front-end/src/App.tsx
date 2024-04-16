import { Home } from './Pages/Home';
import { ManageDataProvider } from './Providers/manageDataProvider';

function App() {

  return (
    <ManageDataProvider>
      <Home/>
    </ManageDataProvider>
  )
}

export default App
