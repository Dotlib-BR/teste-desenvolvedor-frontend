import { DEFAULT_LIMIT } from "../utils/pagination"
import { GetMedication, MedicationData } from "../types/responseData"

const baseUrl = 'http://localhost:3000/data' 

export const getMedications: GetMedication = async (page, sortby, params) =>  {
  console.log(!!params)

  const url = params ? 
  `${baseUrl}?_page=${page}&_per_page=${DEFAULT_LIMIT}&_sort=${sortby}&${params.method}=${params.value.toUpperCase()}` 
  : 
  `${baseUrl}?_page=${page}&_per_page=${DEFAULT_LIMIT}&_sort=${sortby}`

  try {
    const data = await fetch(url)
    .then((data) => data.json()) 
    return data as MedicationData
  } catch (error) {
    throw new Error('Error fetching data')
  }
}