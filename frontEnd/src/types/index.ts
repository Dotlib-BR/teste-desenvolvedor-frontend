export interface IMedicineDataList {
    data: IMedicineData[]
  }
  
  export interface IMedicineData {
    id: string
    name: string
    published_at: string
    company: string
    documents: Document[]
    active_principles: IActivePrinciple[]
  }
  
  export interface DIocument {
    id: string
    expedient: string
    type: string
    url: string
  }
  
  export interface IActivePrinciple {
    id: string
    name: string
  }