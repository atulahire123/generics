// src/Components/Context/CartContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './AuthContext';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user) {
      fetchCartItems();
    }
  }, [user]);

  const fetchCartItems = async () => {
    try {
      const emailKey = user.email.replace(/[@.]/g, '');
      const response = await axios.get(`https://crudcrud.com/api/YOUR_CRUDCRUD_API_KEY/cart${emailKey}`);
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      const emailKey = user.email.replace(/[@.]/g, '');
      await axios.post(`https://crudcrud.com/api/YOUR_CRUDCRUD_API_KEY/cart${emailKey}`, product);
      setCartItems(prevItems => [...prevItems, product]);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
