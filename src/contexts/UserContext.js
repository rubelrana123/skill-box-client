import React, { createContext } from 'react';
 import {createUserWithEmailAndPassword, getAuth, sendEmailVerification} from 'firebase/auth' 
import app from '../Firebase/firebase.confiq';
const auth = getAuth(app);
export const  AuthContext = createContext();
const UserContext = ({children}) => {
  const user = {displayName : "Rubel Rana"};
  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  };
  const verifyEmail = () =>{
    return sendEmailVerification(auth.currentUser);
  }
  const AuthInfo = {user, createUser, verifyEmail}
  return (
    <div>
      <AuthContext.Provider value = {AuthInfo}>
      {children}
      </AuthContext.Provider>
      
    </div>
  );
};

export default UserContext;