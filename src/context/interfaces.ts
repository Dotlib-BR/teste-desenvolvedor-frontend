import { ReactNode } from "react";
import { IMedicine } from "../@types/medicine";
import { IPagination } from "../@types/pagination";

export interface MedicineContextValue {
    originalData: IMedicine[];
    data: IMedicine[];
    pages: IPagination;
    setData: React.Dispatch<React.SetStateAction<IMedicine[]>>;
    setPages: React.Dispatch<React.SetStateAction<IPagination>>;
    fetchData: (page: number) => void;
    handlePageChange: (page: number) => void;
}

export interface MedicineContextProviderProps {
    children: ReactNode;
}