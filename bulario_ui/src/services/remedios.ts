import { getRequest } from "../utils/axiosRequest"

export const getRemedioPaginado = async (pagina: number, qtdItens: number) => {
    return await getRequest(`?_page=:${pagina}&_limit=${qtdItens}`);
}

export const getRemedioById = async (id: number) => {
    return await getRequest(`:${id}`);
}

