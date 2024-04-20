import { useState } from 'react';
import Header from './components/header';
import SearchForm from './components/search-form';
import { useMedicineData } from './services/medicine';

function App() {
    const { data } = useMedicineData();
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (searchText: string) => {
        setSearchText(searchText);
    };

    return (
        <div className="max-w-7xl mx-auto px-5 xl:px-0 py-5 flex flex-col gap-6 h-full">
            <Header />
            <SearchForm handleSearchChange={handleSearchChange} />
            {searchText}
            {data?.map(medicine => (
                <p>{medicine.name}</p>
            ))}
        </div>
    );
}

export default App;
