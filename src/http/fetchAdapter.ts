import { HttpClient } from './httpClient'

export class FetchAdapter implements HttpClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url).then((res) => res.json())

    return response
  }
}
