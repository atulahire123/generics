// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, calculateTotal } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <h2>{item.title}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <h2>Total: ${calculateTotal()}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;
