import React, { createContext } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const auth = getAuth(app)

    // sign-in 
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login 
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo = { 
        signUp,
        login
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;