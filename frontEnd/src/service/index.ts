import axios from "axios";

const url: string = import.meta.env.VITE_API_URL

export async function getMedicineData() {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error('Erro ao fazer requisição:', error);
  }
}