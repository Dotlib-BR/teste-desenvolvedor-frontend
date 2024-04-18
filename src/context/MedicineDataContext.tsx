import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";

import {
  IMedicineDataContext,
  IMedicineData,
  IPaginationInfo,
} from "./MedicineDataContext.d";
import axios from "axios";

export const MedicineDataContext = createContext({} as IMedicineDataContext);

type IMedicineDataContextProvider = {
  children: ReactNode;
};

export function MedicineDataContextProvider({
  children,
}: IMedicineDataContextProvider) {
  const [medicineData, setMedicineData] = useState<IMedicineData[]>([]);
  const [filteredMedicineData, setFilteredMedicineData] = useState<
    IMedicineData[]
  >([]);
  const [paginationInfo, setPaginationInfo] = useState({
    currentPage: 1,
  } as IPaginationInfo);
  const [isSuccesModalOpen, setIsSuccesModalOpen] = useState(false);

  useEffect(() => {
    const getMedicineData = async () => {
      const { data: response } = await axios.get(
        `http://localhost:3000/data?_page=${paginationInfo.currentPage}`
      );

      console.log({ response }, paginationInfo.currentPage);

      setPaginationInfo({
        next: response.next,
        previous: response.previous,
        pages: response.pages,
        currentPage: paginationInfo.currentPage,
      });
      setMedicineData(response.data);
      setFilteredMedicineData(response.data);
    };

    getMedicineData();
  }, [paginationInfo.currentPage]);

  return (
    <MedicineDataContext.Provider
      value={{
        medicineData,
        setMedicineData,
        filteredMedicineData,
        setFilteredMedicineData,
        paginationInfo,
        setPaginationInfo,
        isSuccesModalOpen,
        setIsSuccesModalOpen,
      }}
    >
      {children}
    </MedicineDataContext.Provider>
  );
}

export const useMedicineData = () => useContext(MedicineDataContext);
