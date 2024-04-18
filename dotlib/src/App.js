import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MedicationSearch from './Pages/medicationSearch'

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a página de paginação */}
        <Route path="/" element={<MedicationSearch />} />
      </Routes>
    </Router>
  );
}

export default App;