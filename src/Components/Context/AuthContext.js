import React, { createContext, useState, useCallback, useEffect } from 'react';

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  return localStorage.getItem('token');
};

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(retrieveStoredToken());

  const userIsLoggedIn = !!token;

  const loginHandler = useCallback((token) => {
    setToken(token);
    localStorage.setItem('token', token);
  }, []);

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
  }, []);

  useEffect(() => {
    const storedToken = retrieveStoredToken();
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

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
