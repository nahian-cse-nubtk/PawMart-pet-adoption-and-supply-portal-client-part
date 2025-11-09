import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';

const instance = axios.create({
    baseURL: 'http://localhost:5000/'

})

const useAxiosSecure = () => {
    const {user}= useAuth();
    useEffect(()=>{
        const requestInterceptor = instance.interceptors.request.use((config)=>{
            config.headers.authorization=`Bearer ${user.accessToken}`;
            return config;
        })
        const responseInterceptor = instance.interceptors.response.use((res)=>{
            return res;
        },(error)=>{
            console.log(error.status)

        })
        return ()=>{
            instance.interceptors.request.eject(requestInterceptor);
            instance.interceptors.response.eject(responseInterceptor);
        }
    })
    return instance;
};

export default useAxiosSecure;