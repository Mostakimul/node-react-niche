import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.int';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const auth = getAuth();

  // register user
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // login user
  const loginUserWithEmail = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // observer for user
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsub;
  }, [auth]);

  // signout user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUserWithEmail,
    logOut,
  };
};

export default useFirebase;
