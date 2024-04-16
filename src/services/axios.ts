
// json-server api/dotlib.json --static . -p 3000

import { api } from "./baseUrl";
import { successToast } from "../helpers/Toasts";
interface Params {
  name: string;
  company: string;
}

export const getData = async () => {
  try {
    const response = await api.get('/data');
    successToast();
    return response.data;
  
  } catch (error) {
    console.error('Erro ao obter os dados:', error);
    throw error;
  }
}

export const getDataByNameOrLab = async (value: string) => {
  try {
    const searched_value = value.trim().toLowerCase();
    if(searched_value.length > 2) {
      const response = await api.get('http://localhost:3000/data');

      const result = response.data.filter( ( { name, company } : Params ) => {
        return (
          name.toLowerCase().includes(searched_value) ||
          company.toLowerCase().includes(searched_value)
        );
      });
      return result;
    }
    // retornar um toast;
    console.log('invalid;')
  } catch (error) {
    console.error('Erro ao obter os dados:', error);
    throw error;
  }
};