import axios from "axios";

const url: string = import.meta.env.VITE_API_URL;

export async function getMedicineData(params?: { id?: string; page?: number }) {
  let apiUrl = url;

  if (params?.id) {
    apiUrl += `/${params.id}`;
  }

  if (params?.page) {
    apiUrl += `?_page=${params.page}`;
  }

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}