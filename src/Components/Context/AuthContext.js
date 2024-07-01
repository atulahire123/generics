import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth) {
      setIsAuthenticated(JSON.parse(storedAuth));
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
