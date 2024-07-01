import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('/api/cart');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

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
