import React, { createContext, useState, useEffect, useCallback } from 'react';

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  return storedToken;
};

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(retrieveStoredToken());

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
  }, []);

  useEffect(() => {
    if (token) {
      // Optionally, add a timer to automatically log out when the token expires
    }
  }, [token]);

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
