
// Routes.js
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Details} from './components/MedicineDetails/Details'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
      <Routes>
        <Route path="/data/:id" element={ <Details /> } />
      </Routes>
    </BrowserRouter>
  );
};