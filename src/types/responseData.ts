import { FetchErrors } from "./errors"

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
  last: 2
  next: number
  pages: number
  prev: number | null
}

export type SearchByType = 'none' | 'name' | 'company' 

type Error = {
  error: boolean
  errorMsg: FetchErrors
}

export type ResponseData = MedicationData & Error

export type GetMedication = (page: number, value?: string) => Promise<ResponseData>
