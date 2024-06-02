// src/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (email, password) => {
    // autentikasi sederhana
    if (email === 'admin@example.com' && password === 'admin123') {
      setIsLoggedIn(true);
      setIsAdmin(true);
      return true;
    } else if (email === 'guest@example.com' && password === 'guest123') {
      setIsLoggedIn(true);
      setIsAdmin(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
