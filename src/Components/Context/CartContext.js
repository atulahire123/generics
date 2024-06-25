import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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

  const decreaseQuantity = (album) => {
    setCartItems((prevItems) => {
      const existingCartItemIndex = prevItems.findIndex(item => item.title === album.title);
      if (existingCartItemIndex > -1) {
        const updatedCartItems = [...prevItems];
        if (updatedCartItems[existingCartItemIndex].quantity > 1) {
          updatedCartItems[existingCartItemIndex].quantity -= 1;
        } else {
          updatedCartItems.splice(existingCartItemIndex, 1);
        }
        return updatedCartItems;
      }
      return prevItems;
    });
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const total = useMemo(() => calculateTotal(), [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, showCart, setShowCart, addToCart, decreaseQuantity, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
