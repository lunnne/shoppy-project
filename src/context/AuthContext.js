import { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
const [user, setUser] = useState({})

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth)
    alert('you are signing out!')
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser);
        console.log('user', currentUser);
    })
    return() => {
        unsubscribe()
    }
  })

  return <AuthContext.Provider value={{googleSignIn, logOut, user}}>{children}</AuthContext.Provider>;
}

export const UserAuth = () => {
 return useContext(AuthContext);
};
