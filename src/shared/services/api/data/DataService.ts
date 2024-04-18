import { MedicineInterface } from '../interfaces/medicineInterface';
import { Api } from '../ApiConfig';

const getAll = async (): Promise<MedicineInterface[] | Error> => {
    try {
        const { data } = await Api().get('/data');

        return data;
    } catch (error) {
        return new Error('Erro ao consultar a API');
    }
};

const getById = async (id: string): Promise<MedicineInterface | Error> => {
    try {
        const { data } = await Api().get(`/data${id}`);

        return data;
    } catch (error) {
        return new Error('Erro ao consultar a API');
    }
};

export const DataServices = {
    getAll,
    getById,
};
