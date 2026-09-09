import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
     const unSubscribed = onAuthStateChanged(auth,(currentUser)=>{
setUser(currentUser)
setLoading(false)
     })
     return()=>{
        unSubscribed()
     }
    },[])
    const authInfo = {
    createUser,
    signInUser,
    user,
    signOutUser,
    loading,
    googleSignIn,
    }
//     onAuthStateChanged(auth, (currentUser)=>{
// if(currentUser){
//     console.log(currentUser)
// }else{
//     console.log(currentUser)
// }
//     })
    return (
        <AuthContext value={authInfo}>
{children}
        </AuthContext>
    );
};

export default AuthProvider;