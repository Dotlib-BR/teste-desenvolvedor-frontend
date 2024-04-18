import api from '../config/api'

export async function getMedicines(page: number) {
  return await api.medicines.get(`/data?_page=${page}`)
}
