import React, { useState, useEffect } from 'react';
import MedicineList from './components/MedicineList';
import axios from 'axios';

function App() {
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [paginationInfo, setPaginationInfo] = useState({
    currentPage: 1,
    totalPages: 1,
    nextPage: null,
    prevPage: null
  });

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        let url = 'http://localhost:3000/data';
        if (!searchTerm) {
          url += `?_page=${paginationInfo.currentPage}`;
        }
        const response = await axios.get(url);
        setMedicines(response.data);
        setPaginationInfo({
          currentPage: paginationInfo.currentPage,
          totalPages: response.data.pages,
          nextPage: response.data.next,
          prevPage: response.data.prev
        });
        if (searchTerm) {
          const filtered = response.data.filter((medicine) => {
            return (
              medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              medicine.company.toLowerCase().includes(searchTerm.toLowerCase())
            );
          });
          setFilteredMedicines(filtered);
        }
      } catch (error) {
        console.error('Erro ao buscar medicamentos:', error);
      }
    };

    fetchMedicines();
  }, [paginationInfo.currentPage, searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPaginationInfo({
      currentPage: 1,
      totalPages: paginationInfo.totalPages,
      nextPage: null,
      prevPage: null
    });
  };

  const handleNextPage = () => {
    setPaginationInfo((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage + 1
    }));
  };

  const handlePrevPage = () => {
    setPaginationInfo((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage - 1
    }));
  };

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
        <MedicineList medicines={searchTerm ? filteredMedicines : medicines} />
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevPage}
            disabled={!paginationInfo.prevPage}
            className={`${paginationInfo.prevPage ? "bg-blue-500 cursor-pointer" : "bg-gray-500 cursor-not-allowed"} text-white px-4 py-2 rounded`}
          >
            Previous Page
          </button>
          <button
            onClick={handleNextPage}
            disabled={!paginationInfo.nextPage}
            className={`${paginationInfo.nextPage ? "bg-blue-500 cursor-pointer" : "bg-gray-500 cursor-not-allowed"} text-white px-4 py-2 rounded`}
          >
            Next Page
          </button>
        </div>
      </main>
      <footer className="bg-blue-500 p-4 text-white text-center">
        &copy; {new Date().getFullYear()} Bulário Eletrônico. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
