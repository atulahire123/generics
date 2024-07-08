// src/Components/Context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token, email) => {
    setUser({ token, email });
    localStorage.setItem('authToken', token); // Persist the token
    localStorage.setItem('authEmail', email); // Persist the email
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken'); // Remove the token from local storage
    localStorage.removeItem('authEmail'); // Remove the email from local storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
