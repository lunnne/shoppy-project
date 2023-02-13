import { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../utils/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const email = currentUser.email;
        if (email === 'munjin1340@gmail.com') {
          setUser({ ...currentUser, admin: true });
        } else {
          return setUser({...currentUser, admin: false});
        }
      } else {
        setUser(null);
      }
    });
  }, []);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth)
    alert('you are signing out!');
  };

  return <AuthContext.Provider value={{ googleSignIn, logOut, user }}>{children}</AuthContext.Provider>;
}

export const UserAuth = () => {
  return useContext(AuthContext);
};
