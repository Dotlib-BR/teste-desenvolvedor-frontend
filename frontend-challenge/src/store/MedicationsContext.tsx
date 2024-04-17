import { createContext, ReactNode, useEffect, useState } from "react";
import { Medication } from "../types/Medication";
import { Pagination } from "../types/Pagination";

interface MedicationsContextType {
  medications: Medication[];
  setMedications: React.Dispatch<React.SetStateAction<Medication[]>>;
  loading: boolean;
  loadingError: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
}

export const MedicationsContext = createContext<MedicationsContextType | undefined>(undefined);

interface MedicationsProviderProps {
  children: ReactNode;
}

export const MedicationsProvider = ({ children }: MedicationsProviderProps) => {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingError, setLoadingError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagination, setPagination] = useState<Pagination>({
    first: 0,
    prev: null,
    next: null,
    pages: 0,
    items: 0
  });

  const getMedications = async () => {
    try {
      const response = await fetch(`http://localhost:3000/data?_page=${currentPage}`);
      const data = await response.json();
      setMedications(data.data);
      setPagination({
        first: data.first,
        prev: data.prev,
        next: data.next,
        pages: data.pages,
        items: data.items
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setLoadingError(true);
    }
  }

  useEffect(() => {
    getMedications();
  }, [currentPage]);

  return (
    <MedicationsContext.Provider value={{
      medications,
      setMedications,
      loading,
      loadingError,
      searchTerm,
      setSearchTerm,
      currentPage,
      setCurrentPage,
      pagination,
      setPagination
    }}>{children}</MedicationsContext.Provider>
  )
}