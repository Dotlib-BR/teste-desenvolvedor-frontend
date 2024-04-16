export interface Medicine {
  id: string
  name: string
  published_at: string
  company: string
  documents: Documents[]
  active_principles: ActivePrinciples[]
}

export interface Documents {
  id: string
  expedient: string
  type: "PATIENT" | "PROFESSIONAL"
  url: string
}

export interface ActivePrinciples {
  id: string
  name: string
}
