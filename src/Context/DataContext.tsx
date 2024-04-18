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

export interface Medication {
  id: string;
  name: string;
  published_at: string;
  company: string;
  documents: Documents[];
  active_principles: ActPrinciples[];
}

interface TypeContext {
  data: Medication[] | null;
  loading: boolean;
  erro: string | null;
  search: string;
  setSearch:  React.Dispatch<React.SetStateAction<string>>;
}

export const Context = React.createContext<TypeContext | null>(null);

export const useData = () => {
  const DataContext = React.useContext(Context);

  if(!DataContext) throw new Error('Você deve passar o contexto dentro do Provider!');

  return DataContext;
}

export const DataContextProvider = ({children}: React.PropsWithChildren) => {
  const [search, setSearch] = React.useState('');

  const fetchData = useFetch<Medication[]>(`http://localhost:3000/data`);

  return (
    <Context.Provider value={{...fetchData, search, setSearch}}>
      {children}
    </Context.Provider>
  )
}
