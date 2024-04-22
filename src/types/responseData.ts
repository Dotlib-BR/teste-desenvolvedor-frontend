type DocumentType = "PROFESSIONAL" | "PATIENT"

type Document = {
  id: string
  expedient: string
  type: DocumentType
  url: string
}

type ActivePrinciple = {
  id: string
  name: string
}

export type Medication = {
  id: string
  name: string
  published_at: string
  company: string
  documents: Document[]
  active_principles: ActivePrinciple[]
}

export type MedicationData = {
  data: Medication[]
  first: number
  items: number
  last: number
  next: number
  pages: number
  prev: number | null
}

export type SearchByType = 'none' | 'name' | 'company' 
export type SortBy = 'published_at' | 'name' | 'company'

type Params = {
  value: string
  method: SearchByType
}

export type GetMedication = (page: number, sortBy: SortBy, params?: Params) => Promise<MedicationData>
