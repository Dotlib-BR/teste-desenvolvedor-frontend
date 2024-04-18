export type DocumentsType = {
  id: string;
  expedient: string;
  type: "PROFESSIONAL" | "PATIENT";
  url: string;
};

export type ResponseLeaflet = {
  id: string;
  name: string;
  published_at: string;
  company: string;
  documents: DocumentsType[];
  active_principles: {
    id: string;
    name: string;
  }[];
};

export type ResponseLeafletPagination = {
  first: number;
  prev: number | null;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: ResponseLeaflet[];
};

export type ResponseLeafletPaginationMapper = {
  first: number;
  prev: number | null;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: ResponseLeafletMapper[];
};

export type ResponseLeafletMapper = {
  id: string;
  name: string[];
  published_at: string;
  company: string;
  documents: {
    id: string;
    expedient: string;
    type: "PROFESSIONAL" | "PATIENT";
    url: string;
  }[];
  active_principles: {
    id: string;
    name: string;
  }[];
  favorite: boolean;
};
