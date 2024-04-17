import client from '../../ApiClient'
import { IListItemsResponse } from './interface'

const list = (): Promise<IListItemsResponse[]> => client.api.get('/data')
const getById = (id: string): Promise<IListItemsResponse> => client.api.get(`/data/${id}`)
const listPaginated = (page: number): Promise<IListItemsResponse[]> => client.api.get(`/data?_page=${page}`)

export {
    list,
    getById,
    listPaginated
}
