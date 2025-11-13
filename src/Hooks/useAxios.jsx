import axios from 'axios';
import React from 'react';
const axiosInstance = axios.create({
    baseURL: 'https://pawmart-pet-adoption-and-supply.vercel.app/'
})
const useAxios = () => {
    return axiosInstance;
};

export default useAxios;