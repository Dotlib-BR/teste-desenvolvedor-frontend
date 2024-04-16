import { FetchAdapter } from '@/http/fetchAdapter'
import { MedicineHttpGateway } from '@/http/medicineHttpGateway'

export async function useHome(name: string) {
  // const httpAdapter = new AxiosAdapter()
  const httpAdapter = new FetchAdapter()
  const httpGateway = new MedicineHttpGateway(
    httpAdapter,
    'http://localhost:3001/data'
  )
  const response = await httpGateway.getAllMedicines()

  const listMedicineFiltered = response.filter((medicine) => {
    if (!name) return response
    return (
      medicine.name.toLowerCase().includes(name.toLowerCase()) ||
      medicine.company.toLowerCase().includes(name.toLowerCase())
    )
  })

  return { medicines: listMedicineFiltered }
}
