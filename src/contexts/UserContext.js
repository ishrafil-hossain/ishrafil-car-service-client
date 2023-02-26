import React, { createContext } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [loader, setLoader] = useState(true);
    const auth = getAuth(app);

    // sign-in 
    const signUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login 
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout 
    const logout = () => {
        const sure = window.confirm('Are you want to logout...?')
        if (sure) {
            signOut(auth)
                .then()
                .catch()
        }
    }

    // Get the currently signed-in user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => unsubscribe();
    }, [])

    const userInfo = {
        signUp,
        login,
        user,
        logout,
        loader
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;