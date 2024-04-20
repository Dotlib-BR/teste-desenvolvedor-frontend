import { useState } from 'react';
import Header from './components/header';
import SearchForm from './components/search-form';
import { useMedicineData } from './services/medicine';
import MedicineList from './components/medicine-list';
import Pagination from './components/pagination';
import {
    calculateTotalPages,
    filteredMedicines,
    orderByDateMedicines
} from './helpers/medicine';

function App() {
    const { data } = useMedicineData();
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);

    const filteredMedicinesArray =
        filteredMedicines(data || [], searchText) || [];
    const medicines = orderByDateMedicines(filteredMedicinesArray);
    const totalPages = calculateTotalPages(medicines.length);

    const handleSearchChange = (searchText: string) => {
        setPage(1);
        setSearchText(searchText);
    };

    return (
        <div className="max-w-7xl mx-auto px-5 xl:px-0 py-5 flex flex-col gap-6 h-full">
            <Header />
            <SearchForm handleSearchChange={handleSearchChange} />
            <MedicineList data={medicines} page={page} />
            {searchText !== '' && filteredMedicinesArray.length === 0 ? (
                <div className="font-semibold mt-8">
                    Nenhum medicamento encontrado para "{searchText}"
                </div>
            ) : (
                <div className="md:mt-8">
                    <Pagination
                        page={page}
                        setPage={setPage}
                        totalPages={totalPages}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
