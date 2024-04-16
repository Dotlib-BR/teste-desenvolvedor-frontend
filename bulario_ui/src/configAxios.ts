import axios, { AxiosInstance } from 'axios';

const getAxios = async (timeout: number = 600000) => {

    const token: string | null = localStorage.getItem('@admin_Token');

    const instance: AxiosInstance = axios.create({
        baseURL: "http://localhost:3000/data",
        timeout: timeout,
    });

    return instance
}

export default getAxios;