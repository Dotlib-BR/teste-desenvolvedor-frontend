export interface MedicineProps {
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
