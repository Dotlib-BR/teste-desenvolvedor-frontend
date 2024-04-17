import { createContext, ReactNode, useEffect, useState } from "react";
import { Medication } from "../types/Medication";

interface MedicationsContextType {
  medications: Medication[];
  setMedications: React.Dispatch<React.SetStateAction<Medication[]>>;
  loading: boolean;
  loadingError: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
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

  const getMedications = async () => {
    try {
      const response = await fetch("http://localhost:3000/data");
      const data = await response.json();
      setMedications(data);
      setLoading(false);
    } catch (error) {
      setLoadingError(true);
    }
  }

  useEffect(() => {
    getMedications();
  }, []);

  return (
    <MedicationsContext.Provider value={{ medications, setMedications, loading, loadingError, searchTerm, setSearchTerm }}>{children}</MedicationsContext.Provider>
  )
}