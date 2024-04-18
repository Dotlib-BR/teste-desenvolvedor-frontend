import axios from 'axios'
import { API_MEDICINES_URL } from '@env'

const medicines = axios.create({
  baseURL: import.meta.env.VITE_API_MEDICINES_URL,
})

const api = { medicines }

export default api
