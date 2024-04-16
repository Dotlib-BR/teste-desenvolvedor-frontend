import { useState } from 'react';
import { motion } from 'framer-motion';

import { Search } from './components/Search';
import { Products } from './components/Products';

import { FilterBy } from '@/app/enums/FilterBy';

export function Home() {
  const [searchText, setSearchText] = useState('');
  const [filterBy, setFilterBy] = useState<FilterBy>(FilterBy.dinamic);

  return (
    <div className="h-dvh flex flex-col items-center gap-6 px-4 pb-4 overflow-hidden md:px-10">
      <header className="flex flex-col justify-center items-center gap-4 w-full max-w-[1024px] h-[124px] md:relative">
        <motion.img
          src="./dotlib.png"
          alt="Dotlib Logo"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-32 md:absolute md:right-0 md:w-24 md:-mt-3"
        />
        <motion.h1
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          BULÁRIO ELETRÔNICO
        </motion.h1>
      </header>

      <Search
        currentFilter={filterBy}
        onSearchTextChange={(value) => setSearchText(value)}
        onFilterChange={(value) => setFilterBy(value)}
      />

      <Products searchText={searchText} filterBy={filterBy} />
    </div>
  );
}
