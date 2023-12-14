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
  const [thumb, setThum] = useState([]);
  const [dietData, setDietData] = useState([]);
  const [showDiet, setShowDiet] = useState([]);
  const [chefs, setChefs] = useState([]);

  // console.log(dietData[0]);

  /* ------------------------------------ comment : all useeffect --------------------------------------------*/
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

  useEffect(() => {
    fetch("http://localhost:3000/thumb")
      .then((res) => res.json())
      .then((data) => setThum(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/dietplan")
      .then((res) => res.json())
      .then((data) => setDietData(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
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

  // funtion for show diet plan
  const showDietPlan = (id) => {
    const dayData = dietData.find((day) => day.day === id) || "MONDAY";
    setShowDiet(dayData);
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
    thumb,
    dietData,
    showDietPlan,
    showDiet,
    chefs,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
