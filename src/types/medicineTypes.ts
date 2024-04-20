export interface Document {
    id: string;
    expedient: string;
    type: string;
    url: string;
}

export interface ActivePrinciple {
    id: string;
    name: string;
}

export interface MedicineData {
    id: string;
    name: string;
    published_at: string;
    company: string;
    documents: Document[];
    active_principles: ActivePrinciple[];
}