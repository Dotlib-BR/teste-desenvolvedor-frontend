interface IMedicineDataContext {
    medicineData: IMedicineData[];
    setMedicineData: (data: IMedicineData[]) => void;
}

interface IMedicineData {
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

export { IMedicineDataContext, IMedicineData };
