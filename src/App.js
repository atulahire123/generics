// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Store/Cart/Header';
import Footer from './Components/Store/Cart/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Profile from './Components/Profile/Profile';
import Store from './Components/Store/Store';
import AddProduct from './Components/Store/AddProduct';
import ProtectedRoute from './Components/ProtectedRoute';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Cart from './Components/Store/Cart/Cart';
import AuthContextProvider from './Components/Context/AuthContext';
import CartContextProvider from './Components/Context/CartContext';

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/store" element={<ProtectedRoute><Store /></ProtectedRoute>} />
          <Route path="/add-product" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
