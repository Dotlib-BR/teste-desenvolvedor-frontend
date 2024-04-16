import { FetchAdapter } from '@/http/fetchAdapter'
import { MedicineHttpGateway } from '@/http/medicineHttpGateway'

export async function useHome() {
  const httpAdapter = new FetchAdapter()
  const httpGateway = new MedicineHttpGateway(
    httpAdapter,
    'http://localhost:3001/data'
  )
  const response = await httpGateway.getAllMedicines()

  return { medicines: response }
}
