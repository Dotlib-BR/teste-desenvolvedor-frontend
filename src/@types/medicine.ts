export interface IDocument {
    id: string;
    expedient: string;
    type: "PROFESSIONAL" | "PATIENT";
    url: string;
};

export interface IActivePrinciple {
    id: string;
    name: string;
};

export interface IMedicine {
    id: string;
    name: string;
    published_at: string;
    company: string;
    documents: IDocument[];
    active_principles: IActivePrinciple[];
};
