
import { ReactNode, useState, createContext } from "react";
import { errorToast } from "../helpers/Toasts";
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
  currentPage: number;
  getData: () => void
  prevPage: () => void;
  nextPage: () => void;
  data: Cards | undefined
  indexOfLastItem: number;
  searched_data: Cards | undefined
  dataForPagination: Cards | undefined
  getDataByNameOrLab: ( value: string ) => void
  setData: React.Dispatch<React.SetStateAction<Cards | undefined>>
 
}

export const DataContext = createContext({} as DataContextTypes);

export function DataProvider(props: DataContextProviderProps) {

  const [data, setData] = useState<Cards>();
  const [searched_data, setSearched_data] = useState<Cards>();

  // pagina inicial;
  const [currentPage, setCurrentPage] = useState(1);
  // 10 itens por pagina;
  const [itemsPerPage] = useState(10);
  // ultimo item da pagina atual para fazer o calculo e buscar mais itens para a próxima pagina;
  const indexOfLastItem = currentPage * itemsPerPage;
  // calculo de para voltar na paginação
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // separando dados por pagina;
  const dataForPagination = data?.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

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
      getDataByNameOrLab,

      nextPage,
      prevPage,
      dataForPagination,
      currentPage,
      indexOfLastItem
    }}>
      {props.children}
    </DataContext.Provider>
  );
};