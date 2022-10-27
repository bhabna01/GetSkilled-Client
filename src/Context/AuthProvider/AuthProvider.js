import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);

    }

    const gitLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state changed', currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }

    }, [])
    const authInfo = { user, loading, theme, providerLogin, logOut, createUser, signIn, gitLogin, toggleTheme, updateUserProfile }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>


    );
};

export default AuthProvider;