// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './Components/Store/Cart/Header';
import Cart from './Components/Store/Cart/Cart';
import Footer from './Components/Store/Cart/Footer';
import About from './Components/About/About';
import Store from './Components/Store/Store';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import ProductPage from './Components/Store/ProductPage'; // Import ProductPage component
import { CartContextProvider } from './Components/Context/CartContext';

function App() {
  return (
    <Router>
      <CartContextProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/product/:productId" element={<ProductPage />} /> {/* Add ProductPage route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Cart />
        </div>
      </CartContextProvider>
    </Router>
  );
}

const NotFound = () => (
  <div>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

export default App;
