import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser = (email,password)=>{return createUserWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }

    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }

    const signOutUser = ()=>{
        return signOut(auth)
        setLoading(true)
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