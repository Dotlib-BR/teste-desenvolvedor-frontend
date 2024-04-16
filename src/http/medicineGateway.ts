import { MedicineDataProps, MedicineProps } from '../@types/medicine'

export interface MedicineGateway {
  getAllMedicines(): Promise<MedicineProps>
  getMedicineById(id: string): Promise<MedicineDataProps | null>
  getMedicineByName(name: string): Promise<MedicineDataProps | null>
  getMedicineByLabName(labName: string): Promise<MedicineDataProps | null>
}
