import { MedicineProps } from '@/@types/medicine'
import { HttpClient } from './httpClient'
import { MedicineGateway } from './medicineGateway'

export class MedicineHttpGateway implements MedicineGateway {
  constructor(private http: HttpClient, private baseUrl: string) {}

  async getAllMedicines(): Promise<MedicineProps[]> {
    const medicines = await this.http.get<MedicineProps[]>(this.baseUrl)

    const medicineOrderedList = medicines.sort((a, b) => {
      if (a.published_at > b.published_at) {
        return 1
      }

      return -1
    })

    return medicineOrderedList
  }

  async getMedicineById(id: string): Promise<MedicineProps | null> {
    return await this.http.get(this.baseUrl + `/${id}`)
  }

  async getMedicineByName(name: string): Promise<MedicineProps | null> {
    const medicines = await this.http.get<MedicineProps[]>(this.baseUrl)
    const medicine = medicines.find((medicine) => medicine.name === name)

    if (!medicine) {
      return null
    }

    return medicine
  }

  async getMedicineByLabName(labName: string): Promise<MedicineProps | null> {
    const medicines = await this.http.get<MedicineProps[]>(this.baseUrl)
    const medicine = medicines.find((medicine) => medicine.company === labName)

    if (!medicine) {
      return null
    }

    return medicine
  }
}
