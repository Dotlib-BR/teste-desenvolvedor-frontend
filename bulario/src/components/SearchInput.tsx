import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@radix-ui/react-dropdown-menu';

interface SearchInputProps {
  onFilter: (searchTerm: string, searchBy: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onFilter }) => {
  const [selectedOption, setSelectedOption] = useState<string>("Filtro" || "Nome");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    const searchBy = selectedOption === "Filtro" ? "Nome" : selectedOption;
    onFilter(searchTerm, searchBy);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="flex items-center max-w-full mx-auto py-6 relative">
      <div className="relative w-full">
      <motion.div
          variants={{
            initial: { x: -100, opacity: 0 },
            animate: { x: 0, opacity: 1 }
          }}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3, delay: 0.4 }}
        >
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-800 duration-500 outline-none"
          onChange={handleFilterChange}
          placeholder="Busque aqui.."
        />
      
      </motion.div>
      </div>
      <motion.div
          variants={{
            initial: { x: 100, opacity: 0 },
            animate: { x: 0, opacity: 1 }
          }}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3, delay: 0.4 }}
        >
      <DropdownMenu>
        <DropdownMenuTrigger
          className="m-4 my-6 z-10 w-24 h-10 outline-none flex items-center justify-center"
          onClick={handleDropdownToggle}
        >
          <button className="bg-gray-700 w-24 h-10  flex items-center justify-center border-white border text-white rounded-md outline-none">
            {selectedOption}
            <IoIosArrowDown className="text-white text-lg cursor-pointer"/>
          </button>
        </DropdownMenuTrigger>
        {isOpen && (
          <DropdownMenuContent className=" cursor-pointer z-10 outline-none">
            <li className="list-none flex w-24 h-10 bg-gray-700 p-2 text-white hover:bg-blue-600 duration-500" onClick={() => handleOptionClick("Nome")}>
              Nome
            </li>
            <li className="list-none flex w-24 h-10 bg-gray-700 p-2 rounded-b-md text-white hover:bg-blue-600 duration-500" onClick={() => handleOptionClick("Empresa")}>
              Empresa
            </li>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </motion.div>
    </div>
  );
};

export default SearchInput;
