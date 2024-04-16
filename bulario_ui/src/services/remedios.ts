import { getRequest } from "../utils/axiosRequest"

export const getRemedioPaginado = async (pagina: number) => {
    return await getRequest(`/data?_page=${pagina}`);
}

export const getRemedioById = async (id: number) => {
    return await getRequest(`/data/${id}`);
}

