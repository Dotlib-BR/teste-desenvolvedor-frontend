import { MedicineProps } from '../@types/medicine'

export interface MedicineGateway {
  getAllMedicines(): Promise<MedicineProps[]>
  getMedicineById(id: string): Promise<MedicineProps | null>
  getMedicineByName(name: string): Promise<MedicineProps | null>
  getMedicineByLabName(labName: string): Promise<MedicineProps | null>
}
