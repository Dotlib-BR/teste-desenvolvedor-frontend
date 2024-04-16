import { MedicineDataProps, MedicineProps } from '@/@types/medicine'
import { HttpClient } from './httpClient'
import { MedicineGateway } from './medicineGateway'

export class MedicineHttpGateway implements MedicineGateway {
  constructor(private http: HttpClient, private baseUrl: string) {}

  async getAllMedicines(): Promise<MedicineProps> {
    const medicines = await this.http.get<MedicineProps>(this.baseUrl)

    const medicineOrderedList = medicines.data.sort((a, b) => {
      if (a.published_at > b.published_at) {
        return 1
      }

      return -1
    })

    medicines.data = medicineOrderedList

    return medicines
  }

  async getMedicineById(id: string): Promise<MedicineDataProps | null> {
    return await this.http.get(this.baseUrl + `/${id}`)
  }

  async getMedicineByName(name: string): Promise<MedicineDataProps | null> {
    const medicines = await this.http.get<MedicineDataProps[]>(this.baseUrl)
    const medicine = medicines.find((medicine) => medicine.name === name)

    if (!medicine) {
      return null
    }

    return medicine
  }

  async getMedicineByLabName(
    labName: string
  ): Promise<MedicineDataProps | null> {
    const medicines = await this.http.get<MedicineDataProps[]>(this.baseUrl)
    const medicine = medicines.find((medicine) => medicine.company === labName)

    if (!medicine) {
      return null
    }

    return medicine
  }
}
