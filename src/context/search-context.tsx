import { createContext, useContext, useState } from "react";
import { ResponseLeafletMapper } from "../service/types";
import { getDefaultLeafletPagination } from "../service/search.service";

type SearchContext = {
  leafletCollection: ResponseLeafletMapper[];
  setLeafletCollection: (value: ResponseLeafletMapper[]) => void;
  searchLeafletPagination: (page: number) => void;
};

export const SearchContext = createContext({} as SearchContext);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [leafletCollection, setLeafletCollection] = useState(
    {} as ResponseLeafletMapper[]
  );

  const searchLeafletPagination = (page: number) => {
    getDefaultLeafletPagination(page).then((data) =>
      setLeafletCollection(data.data)
    );
  };

  return (
    <SearchContext.Provider
      value={{
        leafletCollection,
        setLeafletCollection,
        searchLeafletPagination,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
