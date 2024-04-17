// SearchInput.tsx
import React from "react";
import { FaSearch } from "react-icons/fa";


interface SearchInputProps {
  onFilter: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onFilter }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    onFilter(searchTerm);
  };

  return (
    <div className="flex items-center max-w-full mx-auto py-6 ">
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <FaSearch className="text-gray-400"/>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-800 duration-500 outline-none"
          onChange={handleFilterChange}
          placeholder="Busque aqui.."
        />
      </div>
    </div>
  );
};

export default SearchInput;
