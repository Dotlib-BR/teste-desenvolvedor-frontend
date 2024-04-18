import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface SearchBarProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  searchTerm: string
}

export const SearchBar = ({ handleSearch, searchTerm }: SearchBarProps) => {
  return (
    <section className="mb-20 lg:px-64 w-auto m-auto" id="SearchSection">
      <form className=" mx-auto">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MagnifyingGlassIcon className="h-6 w-6 text-yellow-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 px-10 text-sm text-gray-900 border  rounded-lg  focus:ring-blue-500 focus:border-blue-500 bg-[#f5f5f5] dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Busque pelo nome do medicamento ou laboratório farmacêutico ..."
            value={searchTerm}
            onChange={handleSearch}
            autoComplete="off"
          />
          <button
            type="submit"
            className="text-black absolute end-2.5 bottom-2.5  focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-[#ffd900] hover:bg-[#ffe80d] focus:ring-zinc-700 transition duration-300 ease-in-out"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  )
}
