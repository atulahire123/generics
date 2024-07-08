// src/Components/Store/Cart/Cart.js
import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems } = useCartContext();

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <img src={item.imageUrl} alt={item.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
