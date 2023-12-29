import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // git hub login
  const gitHubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, GitHubProvider);
  };

  // sing up
  const authEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // singIn user
  const singInEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile user
  const updateUserprofile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //logOut user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //currently signed-in use
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);
  console.log(user);

  const authentication = {
    googleLogin,
    gitHubLogin,
    authEmailPassword,
    singInEmailPassword,
    logOutUser,
    user,
    loading,
    updateUserprofile,
  };
  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
