export interface MedicineInterface {
    id: string;
    name: string;
    company: string;
    published_at: string;
    documents: DocumentInterface[];
    active_principles: ActivePrinciplesInterface[];
}
export interface DocumentInterface {
    id: string;
    expedient: string;
    type: string;
    url: string;
}

export interface ActivePrinciplesInterface {
    id: string;
    name: string;
}
