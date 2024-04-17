import { Document } from "./Document"
import { ActivePrinciple } from "./ActivePrinciple"

export type Medication = {
  id: string;
  name: string;
  published_at: string;
  company: string;
  documents: Document[];
  active_principles: ActivePrinciple[];
}