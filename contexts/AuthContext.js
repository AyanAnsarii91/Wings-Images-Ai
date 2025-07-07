import React, { createContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  // ✅ Added loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);  // ✅ Once Firebase responds, set loading false
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.photoURL) {
        await updateProfile(user, {
          photoURL: "https://res.cloudinary.com/dm10rblip/image/upload/v1750439272/avatar_acyng0.jpg",
        });
        await user.reload();
        setUser(auth.currentUser);
      }

      return true;
    } catch (error) {
      console.log("Login error:", error.message);
      return false;
    }
  };

  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        photoURL: "https://res.cloudinary.com/dm10rblip/image/upload/v1750439272/avatar_acyng0.jpg",
      });
      await user.reload();
      setUser(auth.currentUser);

      return true;
    } catch (error) {
      console.log("Signup error:", error.message);
      return false;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Logout error:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
