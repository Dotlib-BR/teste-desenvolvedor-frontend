import axios from 'axios'
import { HttpClient } from './httpClient'

export class AxiosAdapter implements HttpClient {
  async get<T>(url: string): Promise<T> {
    const response = (await axios.get<T>(url)).data

    return response
  }
}
