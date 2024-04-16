import { MedicineProps } from './../@types/medice.d'

export interface MedicineGateway {
  getAllMedicines(): Promise<MedicineProps[]>
  getMedicineById(id: string): Promise<MedicineProps>
  getMedicineByName(name: string): Promise<MedicineProps>
  getMedicineByLabName(labName: string): Promise<MedicineProps>
}
