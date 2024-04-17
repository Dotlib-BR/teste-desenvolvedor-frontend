import { IData } from '@/components/showData';
import React, { createContext, useState } from 'react';

export interface ISearchContext {
  inputValue: string;
  setInputValue: (value: string) => void;
  searchType: 'name' | 'company';
  setSearchType: React.Dispatch<React.SetStateAction<this['searchType']>>;
  data: IData | null;
  setData: React.Dispatch<React.SetStateAction<IData | null>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const SearchContext = createContext<ISearchContext>(
  {} as ISearchContext,
);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const [searchType, setSearchType] =
    useState<ISearchContext['searchType']>('name');

  const [data, setData] = useState<ISearchContext['data']>(null);

  const [page, setPage] = useState(1);

  return (
    <SearchContext.Provider
      value={{
        inputValue,
        setInputValue,
        searchType,
        setSearchType,
        data,
        setData,
        page,
        setPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
