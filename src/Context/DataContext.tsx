import React from 'react';
import useFetch from '../Hooks/useFetch';


export type Documents = {
  id: string;
  expedient: string;
  type: "PATIENT" | "PROFESSIONAL";
  url: string;
}

type ActPrinciples = {
  id: string;
  name: string;
}

interface Medication {
  id: string;
  name: string;
  published_at: string;
  company: string;
  documents: Documents[];
  active_principles: ActPrinciples[];
}

interface DataPages{
  data: Medication[];
  first: number;
  items: number;
  last: number;
  next: number | null;
  pages: number;
  prev: number | null;
}

interface TypeContext {
  data: DataPages | null;
  loading: boolean;
  erro: string | null;
  page: number;
  search: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setSearch:  React.Dispatch<React.SetStateAction<string>>;
}

export const Context = React.createContext<TypeContext | null>(null);

export const useData = () => {
  const DataContext = React.useContext(Context);

  if(!DataContext) throw new Error('Você deve passar o contexto dentro do Provider!');

  return DataContext;
}

export const DataContextProvider = ({children}: React.PropsWithChildren) => {
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState('');

  const fetchData = useFetch<DataPages>(`http://localhost:3000/data?_page=${page}`);

  return (
    <Context.Provider value={{...fetchData, page, setPage, search, setSearch}}>
      {children}
    </Context.Provider>
  )
}
