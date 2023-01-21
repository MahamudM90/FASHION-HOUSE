import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOutUser = () => {
        return signOut(auth);
    };

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User Observing')
            setUser(currentUser);
            setLoading(false);
       });

       return () => unsubscribe();
    }, []); 

    const authInfo = {
        loading,
        createUser,
        updateUser,
        signInUser,
        logOutUser,
        user,
        providerLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;