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

export interface MedicineInterface {
    id: string;
    name: string;
    company: string;
    published_at: string;
    documents: DocumentInterface[];
    active_principles: ActivePrinciplesInterface[];
}

export interface ApiResult {
    first: number;
    prev: number | null;
    next: number | null;
    last: number;
    pages: number;
    items: number;
    data: MedicineInterface[];
}
