import { FetchAdapter } from '@/http/fetchAdapter'
import { MedicineHttpGateway } from '@/http/medicineHttpGateway'

export async function useHome(name: string, page: string = '1') {
  // const httpAdapter = new AxiosAdapter()
  if (!page) page = '1'
  const httpAdapter = new FetchAdapter()
  const httpGateway = new MedicineHttpGateway(
    httpAdapter,
    `http://localhost:3001/data?_page=${page}`
  )
  const response = await httpGateway.getAllMedicines()

  const listMedicineFiltered = response.data.filter((medicine) => {
    if (!name) return response
    return (
      medicine.name.toLowerCase().includes(name.toLowerCase()) ||
      medicine.company.toLowerCase().includes(name.toLowerCase())
    )
  })

  response.data = listMedicineFiltered

  return { medicines: response }
}
