interface Medicine {
  id: string;
  name: string;
  published_at: string;
  company: string;
  documents: Document[];
  active_principles: ActivePrinciple[];
}

interface Document {
  id: string;
  expedient: string;
  type: string;
  url: string;
}

interface ActivePrinciple {
  id: string;
  name: string;
}

export type { Medicine, Document, ActivePrinciple };
