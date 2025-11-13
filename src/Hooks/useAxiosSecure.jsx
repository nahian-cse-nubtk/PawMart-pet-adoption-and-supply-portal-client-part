import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const instance = axios.create({
    baseURL: 'https://pawmart-pet-adoption-and-supply.vercel.app/'

})

const useAxiosSecure = () => {
    const {user,signOutUser}= useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        const requestInterceptor = instance.interceptors.request.use((config)=>{
            config.headers.authorization=`Bearer ${user.accessToken}`;
            return config;
        })
        const responseInterceptor = instance.interceptors.response.use((res)=>{
            return res;
        },(error)=>{
            if(error.status===401||error.status===403){
                signOutUser
                .then(()=>{
                    navigate('/login')
                })

            }

        })
        return ()=>{
            instance.interceptors.request.eject(requestInterceptor);
            instance.interceptors.response.eject(responseInterceptor);
        }
    })
    return instance;
};

export default useAxiosSecure;