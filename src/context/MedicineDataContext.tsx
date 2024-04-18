import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

import { IMedicineDataContext, IMedicineData } from "./MedicineDataContext.d";
import axios from "axios";

export const MedicineDataContext = createContext({} as IMedicineDataContext);

type IMedicineDataContextProvider = {
  children: ReactNode;
};

export function MedicineDataContextProvider({
  children,
}: IMedicineDataContextProvider) {
  const [medicineData, setMedicineData] = useState<IMedicineData[]>([]);

  useEffect(() => {
    const getMedicineData = async () => {
      const { data } = await axios.get("http://localhost:3000/data");

      setMedicineData(data);
    };
    getMedicineData();
  }, []);

  return (
    <MedicineDataContext.Provider
      value={{
        medicineData,
        setMedicineData,
      }}
    >
      {children}
    </MedicineDataContext.Provider>
  );
}

export const useMedicineData = () => useContext(MedicineDataContext);
