import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MedicineData } from '../types/medicine';

const API_URL = 'http://localhost:3000';

const fetchData = async (): Promise<MedicineData[]> => {
    const response = await axios.get<MedicineData[]>(API_URL + '/data');
    return response.data;
};

export function useMedicineData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['medicine-data'],
        refetchInterval: 60 * 60 * 24 // 1 dia
    });

    return { ...query, data: query.data };
}
