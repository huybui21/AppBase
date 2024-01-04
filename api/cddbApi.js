import axiosClient from './axiosClient';

const baseApi = {
    //Example
    getAllChiNhanh: () => {
        const url = '/ChiNhanh';
        return axiosClient.get(url);
    },
};

export default baseApi;
