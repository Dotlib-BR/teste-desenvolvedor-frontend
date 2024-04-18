import api from '../config/api'

export async function getMedicines() {
  return await api.medicines.get('/data')
}
