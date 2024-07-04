import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import App from './App';
import { CartContextProvider } from './Components/Context/CartContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root element

root.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);
