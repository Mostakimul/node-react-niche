import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.int';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // register user
  const registerUser = (email, password, name, history, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        // update displayname
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        const destinantion = location?.state?.from || '/';
        history.replace(destinantion);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // login user
  const loginUserWithEmail = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destinantion = location?.state?.from || '/';
        history.replace(destinantion);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // login with google
  const loginWithGoogle = (history, location) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destinantion = location?.state?.from || '/';
        history.replace(destinantion);
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
    loginWithGoogle,
  };
};

export default useFirebase;
