import React, { useState, useEffect } from 'react';
import MedicineList from './components/MedicineList';
import axios from 'axios';

function App() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data');
        setMedicines(response.data);
      } catch (error) {
        console.error('Erro ao buscar medicamentos:', error);
      }
    };

    fetchMedicines();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-2xl font-semibold text-center">Bulário Eletrônico</h1>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <MedicineList medicines={medicines} />
      </main>
      <footer className="bg-blue-500 p-4 text-white text-center">
        &copy; {new Date().getFullYear()} Bulário Eletrônico. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
