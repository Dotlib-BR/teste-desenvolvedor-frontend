import React from "react";

interface SearchInputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  return (
    
<div className="flex items-center max-w-sm mx-auto py-4">
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-800 duration-500  outline-none" onChange={onChange} placeholder="Busque aqui.." required />
    </div>
</div>

  );
}

export default SearchInput;
