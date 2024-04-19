import { createContext, useContext, useState } from "react";
import {
  ResponseLeafletMapper,
  ResponseLeafletPaginationMapper,
} from "../service/types";
import { getDefaultLeafletPagination } from "../service/search.service";

type SearchContext = {
  searchMode: boolean;
  setSearchMode: (value: boolean) => void;
  searchText: string;
  setSearchText: (value: string) => void;
  leafletCollection: ResponseLeafletMapper[];
  setLeafletCollection: (value: ResponseLeafletMapper[]) => void;
  searchLeafletPagination: (
    page: number,
    sarchMode: boolean,
    searchText: string
  ) => void;
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
  const [searchMode, setSearchMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [leafletCollection, setLeafletCollection] = useState(
    {} as ResponseLeafletMapper[]
  );
  const [leafletCollectionPagination, setLeafletCollectionPagination] =
    useState({} as ResponseLeafletPaginationMapper);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const searchLeafletPagination = (
    page: number,
    searchMode: boolean,
    searchText: string
  ) => {
    scrollToTop();
    getDefaultLeafletPagination(page, searchMode, searchText).then((data) => {
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
        searchMode,
        setSearchMode,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
