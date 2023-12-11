// import section

import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const authContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    /* ----------------------------comment----------------------------------------*/
  // all state will be there
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [thumb,setThum] = useState([])

  /* --------------------------- comment --------------------------------------------*/
//   all useeffect 
 //   funtion for checking logged in user
 useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);

    /* ------------------------------ comment -----------------------------------------*/
  //   funtion for create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   funtion for update data for user
  const updateData = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //   function to login with existing account
  const LogIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  //   funtion for log in using google
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //   funtion to login with github
  const githubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
 
  //   funtion for logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  
  
  const authInfo = {
    user,
    createUser,
    updateData,
    googleLogin,
    githubLogin,
    logout,
    LogIn,
    loading,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
