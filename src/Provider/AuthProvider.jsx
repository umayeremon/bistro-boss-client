import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null);
 const [loader,setLoader]=useState(true);
 const createUser=(email,password)=>{
  setLoader(true)
  return createUserWithEmailAndPassword(auth,email,password)
 }

 useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,createUser=>{
    setUser(createUser)
    setLoader(false)
  })
  return ()=>{
    unSubscribe()
  }
 },[])
  const AuthInfo={
    user,
    loader,
    createUser
  }
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;