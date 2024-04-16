
// json-server api/dotlib.json --static . -p 3000

import { api } from "./baseUrl";

export const getData = async () => {
  try {
    const response = await api.get('/data');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os dados:', error);
    throw error;
  }
}