export interface documentProps {
  id: string;
  expedient: string;
  type: string;
  url?: string;
}

export interface activePrinciplesProps {
  id: string;
  name: string;
}

 export type leafletProps = {
  id: string;
  name: string;
  published_at: string;
  company: string;
  documents: documentProps[];
  active_principles: activePrinciplesProps[];
}