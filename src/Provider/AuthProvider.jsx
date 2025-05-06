import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';



export const AuthContext = createContext();




const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
console.log(user);

const createUser = (email,password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
   
};

 const signIn = (email, password) => {
    
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
   signInWithGoogle
}

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;