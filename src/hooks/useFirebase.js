import axios from 'axios';
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
  const [admin, setAdmin] = useState(false);
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
        // save user to database
        saveToMongo(email, name);
        // update displayname
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
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
        const user = result.user;
        // save user to mongo
        saveToMongoGoogle(user.email, user.displayName);
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

  // saveToMongo
  const saveToMongo = (email, displayName) => {
    const mongoUser = { email, displayName };
    axios
      .post('http://localhost:5000/users', mongoUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // saveToMongo ifor google
  const saveToMongoGoogle = (email, displayName) => {
    const mongoUser = { email, displayName };
    axios
      .put('http://localhost:5000/users', mongoUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // check admin or not
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${user.email}`)
      .then((res) => {
        setAdmin(res.data.admin);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email]);

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
    admin,
    isLoading,
    authError,
    registerUser,
    loginUserWithEmail,
    logOut,
    loginWithGoogle,
  };
};

export default useFirebase;
