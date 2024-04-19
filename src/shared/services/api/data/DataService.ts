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

const getByName = async (page: number, name: string) => {
    try {
        const { data } = await Api().get(`/data?_page=${page}&name=${name}`);

        return data;
    } catch (error) {
        return new Error('Erro ao consultar a API');
    }
};

const getByCompany = async (page: number, company: string) => {
    try {
        const { data } = await Api().get(
            `/data?_page=${page}&company=${company}`,
        );

        return data;
    } catch (error) {
        return new Error('Erro ao consultar a API');
    }
};

const getByNameAndCompany = async (
    page: number,
    name: string,
    company: string,
) => {
    try {
        const { data } = await Api().get(
            `/data?_page=${page}&name=${name}&company=${company}`,
        );

        return data;
    } catch (error) {
        return new Error('Erro ao baixar o PDF');
    }
};

const downloadPdf = async () => {
    try {
        const pdfUrl = '/pdf_sample.pdf';

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'pdf_sample.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);

        link.click();
        link.remove();

        URL.revokeObjectURL(pdfUrl);
    } catch (error) {
        return new Error('Erro ao consultar a API');
    }
};

export const DataServices = {
    getAll,
    getById,
    getByName,
    getByCompany,
    getByNameAndCompany,
    downloadPdf,
};
