import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import GoogleProvider from './GoogleProvider';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]= useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInwithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth,GoogleProvider)
    }

    const signOutUser =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);


        })

        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo ={
        createUser,
        signInUser,
        signInwithGoogle,
        signOutUser,
        user,
        loading

    }
    return (
        <AuthContext value={authInfo}>
        {children}
        </AuthContext>
    );
};

export default AuthProvider;