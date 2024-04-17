import { Api } from "../api/ApiConfig.ts";
import { ApiException } from "../api/ApiException.ts";

export interface IMedicamentos  {
    id: string;
    name: string;
    published_at: string;
    company: string;
    documents: Document[];
    active_principles: Activeprinciple[];
}
interface Document {
    id: string;
    expedient: string;
    type: string;
    url: string;
}
interface Activeprinciple {
    id: string;
    name: string;
}


const getAll = async(): Promise<IMedicamentos[] | ApiException> => {
    try {
        const { data } = await Api().get('/');
        return data;
    } catch (error) {
        return new ApiException(error.message || 'Erro ao consultar a Api');
    }
};


export const MedicamentosService = {
    getAll
}