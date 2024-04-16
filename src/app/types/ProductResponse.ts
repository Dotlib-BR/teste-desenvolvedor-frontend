interface ProductResponse {
  data: Product[];
  pages: number;
}

interface Product {
  id: string;
  name: string;
  published_at: string;
  company: string;
  documents: Document[];
  active_principles: ActivePrinciples[];
}

interface Document {
  id: string;
  expedient: string;
  type: 'PROFESSIONAL' | 'PATIENT';
  url: string;
}

interface ActivePrinciples {
  id: string;
  name: string;
}

export type { ProductResponse, Product, Document, ActivePrinciples };
