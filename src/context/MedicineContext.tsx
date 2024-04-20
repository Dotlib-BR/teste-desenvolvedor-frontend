import React, { ReactElement } from 'react';
import { IMedicine } from '../@types/medicine';
import { IPagination } from '../@types/pagination';
import api from '../service/api';
import {
    MedicineContextProviderProps,
    MedicineContextValue,
} from './interfaces';

export const MedicineContext = React.createContext<MedicineContextValue>(
    {} as MedicineContextValue
);

const MedicineContextProvider = ({
    children,
}: MedicineContextProviderProps): ReactElement => {
    const [originalData, setOriginalData] = React.useState<IMedicine[]>([]);
    const [data, setData] = React.useState<IMedicine[]>([]);
    const [pages, setPages] = React.useState<IPagination>({
        first: 0,
        prev: 0,
        items: 0,
        last: 0,
        next: 0,
        pages: 0,
    });

    async function fetchData(page: number) {
        const response = await api.get(
            `data?_page=${page}&_per_page=10&_sort=-published_at`
        );
        setData(response.data.data);
        setOriginalData(response.data.data);
        setPages(response.data);
    }

    const handlePageChange = (page: number) => {
        fetchData(page);
    };

    const value: MedicineContextValue = {
        originalData,
        data,
        setData,
        pages,
        setPages,
        handlePageChange,
        fetchData,
    };

    return (
        <MedicineContext.Provider value={value}>
            {children}
        </MedicineContext.Provider>
    );
};

export default MedicineContextProvider;
