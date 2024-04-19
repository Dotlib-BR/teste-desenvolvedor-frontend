//API
import { getMedicineData } from "./api";

//Types
import { IGlobalStateContextType } from "../context/types";

//Utils
import { searchedData } from "../utils/utils";

export const getMedicineByPageOrId = async (
  setState: IGlobalStateContextType["setState"],
  id?: string,
  page?: number
) => {
  try {
    const data = await getMedicineData({ id, page });
    const listData = data.length ? data : data.id ? [data] : data.data;
    setState((prevState) => ({
      ...prevState,
      listData: listData,
    }));
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

export const getSearchedMedicine = async (
  setState: IGlobalStateContextType["setState"],
  searchValue: string
) => {
  try {
    const data = await getMedicineData();
    const filteredData = searchedData(data, searchValue);
    setState((prevState) => ({
      ...prevState,
      listData: filteredData,
    }));
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};
