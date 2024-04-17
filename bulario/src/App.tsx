// App.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";
import SearchInput from "./components/SearchInput";
import { Medicine } from "./types/types";

const App: React.FC = () => {
  const [mediData, setMediData] = useState<Medicine[]>([]);
  const [records, setRecords] = useState<Medicine[]>([]);

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

  const handleFilter = (searchTerm: string) => {
    setRecords(
      mediData.filter(
        (f) => f.name.toLowerCase().includes(searchTerm) || f.company.toLowerCase().includes(searchTerm)
      )
    );
  };

  return (
    <main className="w-screen min-h-screen bg-[#242424]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold p-4 flex items-center justify-center text-gray-200">Lista de Medicamentos</h1>
        <SearchInput onFilter={handleFilter} />
        <Cards records={records} />
      </div>
    </main>
  );
};

export default App;
