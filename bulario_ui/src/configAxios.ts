import axios, { AxiosInstance } from 'axios';

const getAxios = async (timeout: number = 600000) => {
    const instance: AxiosInstance = axios.create({
        baseURL: "http://localhost:3000/data",
        timeout: timeout,
    });

    return instance
}

export default getAxios;