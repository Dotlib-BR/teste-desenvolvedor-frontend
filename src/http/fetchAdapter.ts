import { HttpClient } from './httpClient'

export class FetchAdapter implements HttpClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      method: 'GET',
      next: {
        revalidate: 500,
      },
    }).then((res) => res.json())

    return response
  }
}
