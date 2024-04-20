import { MagnifyingGlass } from '@phosphor-icons/react';

interface SearchFormProps {
    handleSearchChange: (searchText: string) => void;
}

const SearchForm = ({ handleSearchChange }: SearchFormProps) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearchChange(e.target.value);
    };

    return (
        <form className="md:w-80 relative">
            <input
                onChange={handleInputChange}
                type="text"
                placeholder="Pesquise por remédio ou laboratório"
                className="w-full border border-gray-900 p-1 rounded outline-none text-gray-900"
            />
            <button type="button" className="absolute right-1 top-1">
                <MagnifyingGlass size={24} className="text-gray-900" />
            </button>
        </form>
    );
};

export default SearchForm;
