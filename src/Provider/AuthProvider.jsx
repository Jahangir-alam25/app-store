import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';



export const AuthContext = createContext();




const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


const createUser = (email,password)=>{
  setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password)
   
};

 const signIn = (email, password) => {
  setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
   const updateUser = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData);
    };

    const signInWithGoogle = (provider) => {
      return signInWithPopup(auth, provider);
    };

  const logOut = () => {
    return signOut(auth);
  };

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      
    });
    return () => {
      unsubscribe();
    };
  }, []);

const authData = {
   user,
   setUser,
   createUser,
   signIn,
   logOut,
   updateUser,
   signInWithGoogle,
   loading
}

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;