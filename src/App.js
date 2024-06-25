import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Store/Cart/Header';
import Cart from './Components/Store/Cart/Cart';
import Footer from './Components/Store/Cart/Footer';
import { CartContextProvider } from './Components/Context/CartContext';
import About from './Components/About/About';
import Store from './Components/Store/Store';

function App() {
  return (
    <Router>
      <CartContextProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
          <Cart />
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
