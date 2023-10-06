import React, { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
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
import { app } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider(app);
const GithubAuth = new GithubAuthProvider();
const facebookAuth = new FacebookAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // observe user check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  //  create new user
  const newRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // exiting user sing in
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Goggle Sing in
  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuth);
  };

  // Github
  const githubLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, GithubAuth)
  }
  // Facebook
  const facebookLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, facebookAuth)
  }

  // User LogOUt
  const logOut = () => {
    return signOut(auth);
  };

  // User name and photo
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Value pass
  const authInfo = {
    user,
    setLoading,
    loading,
    newRegister,
    singIn,
    logOut,
    updateUserProfile,
    googleSingIn,
    githubLogin,
    facebookLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
