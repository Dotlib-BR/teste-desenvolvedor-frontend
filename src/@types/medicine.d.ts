export interface MedicineProps {
  first: number
  prev: number | null
  next: number | null
  last: number
  pages: number
  items: number
  data: MedicineDataProps[]
}

export interface MedicineDataProps {
  id: string
  name: string
  published_at: date
  company: string
  documents: DocumentsProps[]
  active_principles: ActivePrinciples[]
}

interface DocumentsProps {
  id: string
  expedient: number
  type: TypeDoc
  url: string
}

interface ActivePrinciples {
  id: string
  name: string
}

enum TypeDoc {
  PROFESSIONAL = 'PROFESSIONAL',
  PATIENT = 'PATIENT',
}
