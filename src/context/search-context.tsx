import { createContext, useContext, useState } from "react";
import {
  ResponseLeafletMapper,
  ResponseLeafletPaginationMapper,
} from "../service/types";
import { getDefaultLeafletPagination } from "../service/search.service";

type SearchContext = {
  leafletCollection: ResponseLeafletMapper[];
  setLeafletCollection: (value: ResponseLeafletMapper[]) => void;
  searchLeafletPagination: (page: number) => void;
  leafletCollectionPagination: ResponseLeafletPaginationMapper;
  setLeafletCollectionPagination: (
    value: ResponseLeafletPaginationMapper
  ) => void;
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
  const [leafletCollectionPagination, setLeafletCollectionPagination] =
    useState({} as ResponseLeafletPaginationMapper);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const searchLeafletPagination = (page: number) => {
    scrollToTop();
    getDefaultLeafletPagination(page).then((data) => {
      setLeafletCollection(data.data);
      setLeafletCollectionPagination(data);
    });
  };

  return (
    <SearchContext.Provider
      value={{
        leafletCollection,
        setLeafletCollection,
        searchLeafletPagination,
        leafletCollectionPagination,
        setLeafletCollectionPagination,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
