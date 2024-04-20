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

export interface MedicineData {
    id: string;
    name: string;
    published_at: Date;
    company: string;
    documents: Document[];
    active_principles: ActivePrinciple[];
}
