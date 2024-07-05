import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Store/Cart/Header';
import Footer from './Components/Store/Cart/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Profile from './Components/Profile/Profile';
import Store from './Components/Store/Store';
import ProtectedRoute from './Components/ProtectedRoute';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import ProductPage from './Components/Store/ProductPage';
import AuthContextProvider from './Components/Context/AuthContext';
import CartContextProvider from './Components/Context/CartContext'; // Adjust import path as needed

function App() {
  const [products, setProducts] = useState(null); // State to hold products data

  // Simulated fetch or setting of products
  useEffect(() => {
    // Simulating fetching products from an API or other source
    const fetchedProducts = [
      {
        title: 'Album 1',
        price: 100,
        images: [
          'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        ],
        reviews: [
          'Great album!',
          'Loved the songs.',
        ],
      },
      {
        title: 'Album 2',
        price: 50,
        images: ['https://prasadyash2411.github.io/ecom-website/img/Album%202.png'],
        reviews: [
          'Great album!',
          'Loved the songs.',
        ],
      },
      // Add more products as needed
    ];

    // Set the fetched products into state
    setProducts(fetchedProducts);
  }, []);

  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/store"
              element={
                <ProtectedRoute>
                  <Store products={products} /> {/* Pass products data to Store */}
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </Router>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
