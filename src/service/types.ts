export type ResponseLeaflet = {
  id: string;
  name: string;
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
};

export type ResponseLeafletMapper = {
  id: string;
  name: string;
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
