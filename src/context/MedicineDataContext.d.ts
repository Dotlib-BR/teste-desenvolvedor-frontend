interface IMedicineDataContext {
  medicineData: IMedicineData[];
  setMedicineData: React.Dispatch<React.SetStateAction<IMedicineData[]>>;
  filteredMedicineData: IMedicineData[];
  setFilteredMedicineData: React.Dispatch<
    React.SetStateAction<IMedicineData[]>
  >;
  paginationInfo: IPaginationInfo;
  setPaginationInfo: React.Dispatch<React.SetStateAction<IPaginationInfo>>;
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

interface IPaginationInfo {
  currentPage: number;
  next: number;
  previous: number;
  pages: number;
}

export { IMedicineDataContext, IMedicineData, IPaginationInfo };
