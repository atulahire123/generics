import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../Context/AuthContext';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [cartItems, setCartItems] = useState([]);
  
  // Function to modify the email by removing "@" and "."
  const modifyEmail = (email) => {
    return email.replace(/[@.]/g, '');
  };

  const apiUrl = `https://crudcrud.com/api/ad6f76371373439cbab81d16be93e265/cart${user ? modifyEmail(user.email) : ''}`;

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(apiUrl);
      setCartItems(response.data);
    } catch (err) {
      console.error('Failed to fetch cart items', err);
    }
  };

  const addToCart = async (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      updateQuantity(existingProduct._id, existingProduct.quantity + 1);
    } else {
      try {
        const response = await axios.post(apiUrl, { ...product, quantity: 1 });
        setCartItems([...cartItems, response.data]);
      } catch (err) {
        console.error('Failed to add to cart', err);
      }
    }
  };

  const updateQuantity = async (productId, quantity) => {
    const productToUpdate = cartItems.find((item) => item._id === productId);
    if (productToUpdate) {
      try {
        await axios.put(`${apiUrl}/${productId}`, { ...productToUpdate, quantity });
        setCartItems(cartItems.map((item) =>
          item._id === productId ? { ...item, quantity } : item
        ));
      } catch (err) {
        console.error('Failed to update quantity', err);
      }
    }
  };

  useEffect(() => {
    if (user) {
      fetchCartItems();
    }
  }, [user]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
