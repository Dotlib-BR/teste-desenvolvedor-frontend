import axios from "axios";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

interface Medicine {
  id: string;
  name: string;
  published_at: string;
  company: string;
  documents: Document[];
  active_principles: ActivePrinciple[];
}

interface Document {
  id: string;
  expedient: string;
  type: string;
  url: string;
}

interface ActivePrinciple {
  id: string;
  name: string;
}

const Table = () => {
  const [mediData, setMediData] = useState<Medicine[]>([]);
  const [records, setRecords] = useState<Medicine[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        const sortedData = res.data.sort((a: Medicine, b: Medicine) => {
          return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
        });
        setMediData(sortedData);
        setRecords(sortedData);
      })
      .catch((err) => console.log(err));
  }, []);

  const Filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setRecords(
      mediData.filter((f) => f.name.toLowerCase().includes(searchTerm) || f.company.toLowerCase().includes(searchTerm))
    );
  };

  const startIndex = (currentPage - 1) * 10;
  const endIndex = currentPage * 10;
  const usersOnPage = records.slice(startIndex, endIndex);
  const isNextDisabled = endIndex >= records.length;

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-2xl font-bold p-4 flex items-center justify-center text-gray-200">Lista de Medicamentos</h1>
      <SearchInput onChange={Filter} />
      <div className="m-4 flex justify-between">
        <button
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
          className="mr-2 px-3 py-1 bg-blue-800 text-white rounded hover:bg-emerald-500 duration-500"
        >
          Anterior
        </button>

        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={isNextDisabled}
          className="px-3 py-1 bg-blue-800 text-white rounded hover:bg-emerald-500 duration-500"
        >
          Próxima
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-screen">
        {usersOnPage.map((medicine) => (
          <div key={medicine.id} className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105  transition duration-300 cursor-pointer">
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-white">{medicine.name}</h2>
            </div>
            <p className="text-sm mt-4 text-gray-400"><span className=" text-gray-300 font-bold">ID:</span> {medicine.id}</p>
            <p className="text-sm mt-4 text-gray-400"><span className=" text-gray-300 font-bold">Data de Publicação:</span> {medicine.published_at}</p>
            <div className="my-8">
                
                <p className="text-sm my-4 text-gray-400"><span className="text-3xl font-extrabold text-white">Laboratório</span> - {medicine.company}</p>            
            </div>
            <div className="flex items-center my-6">
              <p className="text-sm text-gray-300 font-semibold">Documentos:</p>
              
              <ul className="pl-4 flex items-center" >
                {medicine.documents.map((document) => (
                  <li className="px-2" key={document.id}>
                    <a href={document.url} className="text-blue-500">{document.type}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center cursor-pointer ">
              <p className="text-sm text-gray-300 font-semibold my-2">Princípios Ativos:</p>
              <ul className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 duration-500">
                {medicine.active_principles.map((activePrinciple) => (
                  <li className="p-1"  key={activePrinciple.id}>{activePrinciple.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Table;
