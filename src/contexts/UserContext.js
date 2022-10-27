import React, { createContext, useEffect, useState } from 'react';
 import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth' 
import app from '../Firebase/firebase.confiq';
const auth = getAuth(app);
export const  AuthContext = createContext();
const UserContext = ({children}) => {
  const [user, setuser] = useState("");
  const [loading, setLoading] = useState(false);
 const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  };
   const signin =  (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   };
   const signout = () =>{
    return signOut(auth);
   } 

  const verifyEmail = () =>{
    return sendEmailVerification(auth.currentUser);
  };
  const forgetPassword = (email) =>{
    return sendPasswordResetEmail(auth, email);
  }
const profileUpdate = (profile) => {
  setLoading(true)
  return updateProfile(auth.currentUser, profile)
}
const googleSignin = () =>{
  setLoading(true)
  return signInWithPopup(auth, googleProvider);
}

useEffect (() => {
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser);
    setLoading(false)
    console.log(currentUser);
    console.log("on state changed");
 
});

return () => unSubscribe();
}, [])
  const AuthInfo = {user,loading, createUser, verifyEmail, profileUpdate, signin,signout, googleSignin, forgetPassword}
  return (
    <div>
      <AuthContext.Provider value = {AuthInfo}>
      {children}
      </AuthContext.Provider>
      
    </div>
  );
};

export default UserContext;