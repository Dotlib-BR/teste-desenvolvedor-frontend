import { DEFAULT_LIMIT } from "../utils/pagination"
import { GetMedication, ResponseData } from "../types/responseData"

const baseUrl = 'http://localhost:3000/data' 

export const getAllMedications: GetMedication = async (page) =>  {
  try {
    const data = await fetch(`${baseUrl}?_page=${page}&_per_page=${DEFAULT_LIMIT}&_sort=published_at`)
    .then((data) => data.json()) 
    return data as ResponseData
  } catch (error) {
    console.log(`Error: ${error}`)
    return { 
      error: true,
      errorMsg: 'Algo deu errado. Tente novamente mais tarde'
    } as ResponseData
  }
}

export const getMedicationByName: GetMedication = async (page, value) =>  {
  try {
    const data = await fetch(`${baseUrl}?_page=${page}&_per_page=${DEFAULT_LIMIT}&_sort=published_at&name_like=${value?.toUpperCase()}`)
    .then((data) => data.json()) 
    return data as ResponseData
  } catch (error) {
    console.log(`Error: ${error}`)
    return {
      error: true,
      errorMsg: 'Algo deu errado. Tente novamente mais tarde'
    } as ResponseData
  }
}

export const getMedicationByCompany: GetMedication = async (page, value) =>  {
  try {
    const data = await fetch(`${baseUrl}?_page=${page}&_per_page=${DEFAULT_LIMIT}&_sort=published_at&company=${value?.toUpperCase()}`)
    .then((data) => data.json()) 
    return data as ResponseData
  } catch (error) {
    console.log(`Error: ${error}`)
    return {
      error: true,
      errorMsg: 'Algo deu errado. Tente novamente mais tarde'
    } as ResponseData
  }
}