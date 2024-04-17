import React, { useState, useEffect } from 'react';
import MedicineList from './components/MedicineList';
import axios from 'axios';

function App() {
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMedicines = medicines.filter((medicine) => {
    return (
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-2xl font-semibold text-center">Bulário Eletrônico</h1>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
      <div className="mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by medicine name or pharmaceutical laboratory..."
              className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
        <MedicineList medicines={filteredMedicines} />
      </main>
      <footer className="bg-blue-500 p-4 text-white text-center">
        &copy; {new Date().getFullYear()} Bulário Eletrônico. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
