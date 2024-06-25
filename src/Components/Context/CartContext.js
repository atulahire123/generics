// CartContext.js

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (album) => {
    setCartItems((prevItems) => {
      const existingCartItemIndex = prevItems.findIndex(item => item.title === album.title);
      if (existingCartItemIndex > -1) {
        const updatedCartItems = [...prevItems];
        updatedCartItems[existingCartItemIndex].quantity += 1;
        return updatedCartItems;
      }
      return [...prevItems, { ...album, quantity: 1 }];
    });
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, showCart, setShowCart, addToCart, removeItem, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};
