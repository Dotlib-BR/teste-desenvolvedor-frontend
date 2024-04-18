import { Api } from '../ApiConfig';
import { ApiResult, MedicineInterface } from '../interfaces/MedicineInterface';

const getAll = async (page: number): Promise<ApiResult | Error> => {
    try {
        const { data } = await Api().get(`/data?_page=${page}`);

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

const getByName = async (name: string, page: number) => {
    try {
        const { data } = await Api().get(`/data?name=${name}&_page=${page}`);

        return data;
    } catch (error) {
        return new Error('Erro ao consultar a API');
    }
};

export const DataServices = {
    getAll,
    getById,
    getByName,
};
