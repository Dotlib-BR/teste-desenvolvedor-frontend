// Cards.tsx
import React, { useState } from "react";
import { Medicine } from "../types/types";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@radix-ui/react-dropdown-menu';

const Cards: React.FC<{ records: Medicine[]}> = ({ records }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * 10;
  const endIndex = currentPage * 10;
  const usersOnPage = records.slice(startIndex, endIndex);
  const isNextDisabled = endIndex >= records.length;

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:m-0 lg:m-0 sm:m-6 xs:m-6">
        {usersOnPage.map((medicine, index) => (
          <motion.div
          key={index}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >
          <div key={medicine.id} className="bg-gray-800 rounded-lg shadow-lg p-6 h-72 transform hover:scale-105 transition duration-300">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">{medicine.name}</h2>
              <p className="text-sm text-gray-400">{new Date(medicine.published_at).toLocaleDateString("pt-BR")}</p>
            </div>
            <div >
              <p className="text-sm my-4 text-gray-400"><span className="text-xl font-bold text-white">Laboratório:</span> {medicine.company}</p>
            </div>
            <div className="flex items-center cursor-pointer ">
              <p className="text-xl font-bold text-white">Princípios Ativos:</p>
              <ul className="text-sm mt-1 flex text-gray-400">
                {medicine.active_principles.map((activePrinciple) => (
                  <li className="p-1" key={activePrinciple.id}>{activePrinciple.name}</li>
                ))}
              </ul>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger  className="absolute bottom-0 flex items-center right-0 m-4 my-6 outline-none" >
                  <IoIosArrowDown className="text-white text-lg cursor-pointer"/>
                  <FaFilePdf className="text-white text-3xl cursor-pointer"/>
                </DropdownMenuTrigger >
                <DropdownMenuContent className="relative flex items-center bottom-9 right-32 bg-blue-400 rounded-md cursor-pointer">
                  {medicine.documents.map((document) => (
                    <li className="list-none flex p-2 rounded-md text-white hover:bg-blue-600 duration-500 " key={document.id}>
                      <a href={document.url} target="_blank" rel="noopener noreferrer">{document.type}</a>
                    </li>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
          </div>
          </motion.div>
        ))}
      </div>
      <div className="m-4 flex justify-center">
        <button
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 mx-auto bg-blue-800 text-white rounded hover:bg-emerald-500 duration-500 ${currentPage === 1 ? 'bg-gray-600 opacity-40' : ''}`}
        >
          Anterior
        </button>

        {[currentPage - 1, currentPage, currentPage + 1].filter((page) => page > 0 && page <= Math.ceil(records.length / 10)).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 text-white rounded-lg mx-6 hover:bg-emerald-500 duration-500 ${currentPage === page ? 'border border-white' : ''}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={isNextDisabled}
          className={`px-3 py-1 mx-auto bg-blue-800 text-white rounded hover:bg-emerald-500 duration-500 ${isNextDisabled ? 'bg-gray-600 opacity-40' : ''}`}
        >
          Próxima
        </button>
      </div>
    </>
  );
};

export default Cards;
