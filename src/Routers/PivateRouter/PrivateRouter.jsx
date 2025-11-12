import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    
    const {user,loading}=useAuth();
    const location = useLocation();

    if(loading){
        return;
    }
    if(user){
        return children;
    }
    <Navigate to='/login' state={location.pathname}></Navigate>

};

export default PrivateRouter;