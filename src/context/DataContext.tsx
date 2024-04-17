
import { ReactNode, useState, createContext } from "react";
import { errorToast, successToast } from "../helpers/Toasts";
import { api } from "../services/baseUrl";
import { Cards } from "../model/card";

type DataContextProviderProps = {
  children: ReactNode
}

type DataSearchParams = {
  name: string;
  company: string
}
type DataContextTypes = {
  data: Cards | undefined;
  searched_data: Cards | undefined
  getData: () => void;
  getDataByNameOrLab: ( value: string ) => void
  setData: React.Dispatch<React.SetStateAction<Cards | undefined>>;
}

export const DataContext = createContext({} as DataContextTypes);

export function DataProvider(props: DataContextProviderProps) {

  const [data, setData] = useState<Cards>();
  const [searched_data, setSearched_data] = useState<Cards>();

  const getData = async () => {
    try {
      const response = await api.get('/data');
      const data = response.data;

      const descending_date = data.sort((a: any, b: any) => {
        const date_a = new Date(a.published_at).getTime();
        const date_b = new Date(b.published_at).getTime();
        return date_b - date_a;
      });
       return setData(descending_date);
    } catch (error) {
      throw error;
    }
  }

  const getDataByNameOrLab = async (value: string) => {
    try {
      const searched_value = value.trim().toLowerCase();
      if (searched_value.length > 2) {
        const response = await api.get('/data');

        const result = response.data.filter(({ name, company }: DataSearchParams) => {
          return (
            name.toLowerCase().includes(searched_value) ||
            company.toLowerCase().includes(searched_value)
          );
        });
         return setSearched_data(result);
      } setSearched_data(data);
    } catch (error) {
      errorToast();
      throw error;
    }
  };

  return (
    <DataContext.Provider value={{
      data,
      setData,
      getData,
      searched_data,
      getDataByNameOrLab
    }}>
      {props.children}
    </DataContext.Provider>
  );
};