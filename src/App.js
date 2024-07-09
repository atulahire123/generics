import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Store/Cart/Header';
import Footer from './Components/Store/Cart/Footer';
import AuthContextProvider from './Components/Context/AuthContext';
import CartContextProvider from './Components/Context/CartContext';
import ProtectedRoute from './Components/ProtectedRoute';

const Home = lazy(() => import('./Components/Home/Home'));
const Login = lazy(() => import('./Components/Auth/Login'));
const Signup = lazy(() => import('./Components/Auth/Signup'));
const Profile = lazy(() => import('./Components/Profile/Profile'));
const Store = lazy(() => import('./Components/Store/Store'));
const AddProduct = lazy(() => import('./Components/Store/AddProduct'));
const About = lazy(() => import('./Components/About/About'));
const ContactUs = lazy(() => import('./Components/ContactUs/ContactUs'));
const Cart = lazy(() => import('./Components/Store/Cart/Cart'));

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
        <Footer />
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
