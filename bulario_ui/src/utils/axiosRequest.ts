import instance from "../configAxios";

export const putRequest = async (url: string, obj: any) => {
    const axios = await instance();

    try {
        const response = await axios.put(url, obj);
        return {
            dados: response.data.dados,
            ...response.data,
        };
    } catch (error: any) {
        return window.alert(error);
    }
};

export const postRequest = async (url: string, obj: any) => {
    const axios = await instance();

    try {
        const response = await axios.post(url, obj);
        return {
            dados: response.data.dados,
            ...response.data,
        };
    } catch (error: any) {
        return window.alert(error);
    }
};

export const getRequest = async (url: string) => {
    const axios = await instance();

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        return window.alert(error);
    }
};

export const deleteRequest = async (url: string) => {
    const axios = await instance();

    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error: any) {
        return window.alert(error);
    }
};

export const patchRequest = async (url: string, obj: any) => {
    const axios = await instance();

    try {
        const response = await axios.patch(url, obj);
        return response.data;
    } catch (error: any) {
        return window.alert(error);
    }
};
