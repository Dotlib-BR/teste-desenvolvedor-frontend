import { useState } from 'react';
import Header from './components/header';
import SearchForm from './components/search-form';
import { useMedicineData } from './services/medicine';
import MedicineList from './components/medicine-list';

function App() {
    const { data } = useMedicineData();
    const [searchText, setSearchText] = useState('');

    const medicines = data || []

    const handleSearchChange = (searchText: string) => {
        setSearchText(searchText);
    };

    return (
        <div className="max-w-7xl mx-auto px-5 xl:px-0 py-5 flex flex-col gap-6 h-full">
            <Header />
            <SearchForm handleSearchChange={handleSearchChange} />
            <MedicineList data={medicines}/>
        </div>
    );
}

export default App;
