

import './App.scss';
import { AppRoutes } from './Routes';
import { Header } from './components/Header/Header';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <>
      <Header />
      <DataProvider>
        <AppRoutes />
      </DataProvider>
    </>
  )
}
export default App
