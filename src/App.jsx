import React, { useState, useEffect } from "react";
import MedicineList from "./components/MedicineList";
import axios from "axios";

function App() {
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [paginationInfo, setPaginationInfo] = useState({
    currentPage: 1,
    totalPages: 1,
    nextPage: null,
    prevPage: null,
  });
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        let url = "http://localhost:3000/data";
        if (!searchTerm) {
          url += `?_page=${paginationInfo.currentPage}`;
        }
        const response = await axios.get(url);
        setMedicines(response.data);
        setPaginationInfo({
          currentPage: paginationInfo.currentPage,
          totalPages: response.data.pages,
          nextPage: response.data.next,
          prevPage: response.data.prev,
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
        console.error("Erro ao buscar medicamentos:", error);
      }
    };

    fetchMedicines();
  }, [paginationInfo.currentPage, searchTerm, sortOrder]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPaginationInfo({
      currentPage: 1,
      totalPages: paginationInfo.totalPages,
      nextPage: null,
      prevPage: null,
    });
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleNextPage = () => {
    setPaginationInfo((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage + 1,
    }));
  };

  const handlePrevPage = () => {
    setPaginationInfo((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage - 1,
    }));
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-2xl font-semibold text-center">
          Bulário Eletrônico
        </h1>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4 relative">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Buscar pelo nome do medicamento ou laboratório farmacêutico..."
              className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
            />
            {searchTerm && (
              <button
                className="absolute right-0 inset-y-0 flex items-center pr-3 text-gray-500"
                onClick={handleClearSearch}
              >
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 5.293a1 1 0 00-1.414 1.414L10 10.414l-3.293-3.293a1 1 0 00-1.414 1.414L8.586 12 5.293 15.293a1 1 0 101.414 1.414L10 13.414l3.293 3.293a1 1 0 001.414-1.414L11.414 12l3.293-3.293a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={toggleSortOrder}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              {sortOrder === "asc"
                ? "Mais Antigo" 
                : "Mais Recente"}
            </button>
          </div>
        </div>
        <MedicineList
          medicines={searchTerm ? filteredMedicines : medicines}
          sortOrder={sortOrder}
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevPage}
            disabled={!paginationInfo.prevPage}
            className={`${
              paginationInfo.prevPage
                ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                : "bg-gray-500 cursor-not-allowed"
            } text-white px-4 py-2 rounded`}
          >
            Página Anterior
          </button>
          <button
            onClick={handleNextPage}
            disabled={!paginationInfo.nextPage}
            className={`${
              paginationInfo.nextPage
                ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                : "bg-gray-500 cursor-not-allowed"
            } text-white px-4 py-2 rounded`}
          >
            Próxima Página
          </button>
        </div>
      </main>
      <footer className="bg-blue-500 p-4 text-white text-center">
        &copy; {new Date().getFullYear()} Bulário Eletrônico. Todos os direitos
        reservados.
      </footer>
    </div>
  );
}

export default App;
