import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext=createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null);
 const [loader,setLoader]=useState(true);
 const axiosPublic =useAxiosPublic()

 const createUser=(email,password)=>{
  setLoader(true)
  return createUserWithEmailAndPassword(auth,email,password)
 }
 const signInUser=(email,password)=>{
  setLoader(true)
  return signInWithEmailAndPassword(auth,email,password)
 }

 const googleLogin=()=>{
  setLoader(true);
  return signInWithPopup(auth,googleProvider)
 }
 const githubLogin=()=>{
  setLoader(true);
  return signInWithPopup(auth,githubProvider)
 }
 const logOut=()=>{
  setLoader(true)
  return signOut(auth)
 }
 const userProfileUpdate=(name,photo)=>{
  return updateProfile(auth.currentUser, {
    displayName: name, photoURL: photo
  })
 }

 useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    if(currentUser){
      const userInfo={email:currentUser.email}
      axiosPublic.post('/jwt', userInfo)
      .then(res=>{
        if(res.data.token){
          localStorage.setItem('access-token', res.data.token)
        }
      })
    }
    else{
      localStorage.removeItem('access-token')
    }
    setLoader(false)
  })
  return ()=>{
    unSubscribe()
  }
 },[axiosPublic])
  const AuthInfo={
    user,
    loader,
    createUser,
    signInUser,
    logOut,
    userProfileUpdate,
    googleLogin,
    githubLogin
  }
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;