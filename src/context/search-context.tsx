import { createContext, useContext, useState } from "react";
import { ResponseLeafletMapper } from "../service/types";
import { getDefaultLeaflet } from "../service/search.service";

type SearchContext = {
  leafletCollection: ResponseLeafletMapper[];
  setLeafletCollection: (value: ResponseLeafletMapper[]) => void;
  searchLeaflet: () => void;
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

  const searchLeaflet = () => {
    getDefaultLeaflet().then((data) => setLeafletCollection(data));
  };

  return (
    <SearchContext.Provider
      value={{ leafletCollection, setLeafletCollection, searchLeaflet }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
