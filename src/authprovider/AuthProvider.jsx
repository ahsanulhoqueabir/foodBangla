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
  const [blog1, setBlog1] = useState([]);
  const [blog2, setBlog2] = useState([]);
  const [blog3, setBlog3] = useState([]);
  const [blog4, setBlog4] = useState([]);

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
    fetch("https://food-rosy-six.vercel.app/thumb")
      .then((res) => res.json())
      .then((data) => setThum(data));
  }, []);

  useEffect(() => {
    fetch("https://food-rosy-six.vercel.app/dietplan")
      .then((res) => res.json())
      .then((data) => setDietData(data));
  }, []);
  useEffect(() => {
    fetch("https://food-rosy-six.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  useEffect(() => {
    fetch("https://food-rosy-six.vercel.app/blog1")
      .then((res) => res.json())
      .then((data) => setBlog1(data));
  }, []);
  useEffect(() => {
    fetch("https://food-rosy-six.vercel.app/blog2")
      .then((res) => res.json())
      .then((data) => setBlog2(data));
  }, []);
  useEffect(() => {
    fetch("https://food-rosy-six.vercel.app/blog3")
      .then((res) => res.json())
      .then((data) => setBlog3(data));
  }, []);
  useEffect(() => {
    fetch("https://food-rosy-six.vercel.app/blog4")
      .then((res) => res.json())
      .then((data) => setBlog4(data));
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
    blog1,
    blog2,
    blog3,
    blog4,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
