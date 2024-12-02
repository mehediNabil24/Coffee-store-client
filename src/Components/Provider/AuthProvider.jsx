import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase.config';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState();
    const [loading,setLoading] =useState(true);
    const createUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userInfo = {
        user, setUser, loading,createUser

    }
  
    return (
        <AuthContext.Provider value={userInfo}>

            {children}

            
        </AuthContext.Provider>
    );
};

export default AuthProvider;