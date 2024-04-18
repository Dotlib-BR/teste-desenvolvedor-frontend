import { DEFAULT_LIMIT } from "../components/utils/pagination"
import { SearchByType } from "../types/responseData"

export async function getMedications (value: string, method: SearchByType, page: number) {
  try {
    const data = await fetch(`http://localhost:3000/data?_page=${page}&_per_page=${DEFAULT_LIMIT}&_sort=published_at&${method}=${value.toUpperCase()}`)
    .then((data) => data.json()) 
    return data 
  } catch (error) {
    console.log(error)
    return {
      error: 'algo deu errado',
    }
  }
}