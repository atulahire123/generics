// App.js

import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Store/Cart/Header';
import Footer from './Components/Store/Cart/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Profile from './Components/Profile/Profile';
import { AuthContext } from './Components/Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Store from './Components/Store/Store';
import LogoutButton from './Components/Auth/LogoutButton';

const NotFound = () => (
  <div>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {!isLoggedIn ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          ) : (
            <>
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/store" element={<ProtectedRoute><Store /></ProtectedRoute>} />
              <Route path="*" element={<Navigate to="/store" replace />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {isLoggedIn && <LogoutButton />}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
