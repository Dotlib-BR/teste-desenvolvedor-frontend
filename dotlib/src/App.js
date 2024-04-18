import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetAllData from './Pages/getAllData'

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a página de paginação */}
        <Route path="/" element={<GetAllData />} />
      </Routes>
    </Router>
  );
}

export default App;