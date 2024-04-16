import { MedicineProps } from '@/@types/medicine'
import { HttpClient } from './httpClient'
import { MedicineGateway } from './medicineGateway'

export class MedicineHttpGateway implements MedicineGateway {
  constructor(private http: HttpClient, private baseUrl: string) {}

  async getAllMedicines(): Promise<MedicineProps[]> {
    const medicines = await this.http.get<MedicineProps[]>(this.baseUrl)

    return medicines
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
