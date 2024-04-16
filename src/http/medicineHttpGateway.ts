import { MedicineProps } from '@/@types/medice'
import { HttpClient } from './httpClient'
import { MedicineGateway } from './medicineGateway'

export class MedicineHttpGateway implements MedicineGateway {
  constructor(private http: HttpClient, private baseUrl: string) {}

  async getAllMedicines(): Promise<MedicineProps[]> {
    const medicines = await this.http.get<MedicineProps[]>(this.baseUrl)

    return medicines
  }

  async getMedicineById(id: string): Promise<MedicineProps> {
    throw new Error('Method not implemented.')
  }

  async getMedicineByName(name: string): Promise<MedicineProps> {
    throw new Error('Method not implemented.')
  }

  async getMedicineByLabName(labName: string): Promise<MedicineProps> {
    throw new Error('Method not implemented.')
  }
}
