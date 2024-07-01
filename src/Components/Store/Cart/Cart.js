import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { showCart, cartItems } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    showCart && (
      <div className="cart-dropdown">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.imageUrl} alt={item.title} />
                <div className="item-details">
                  <p className="title">{item.title}</p>
                  <p className="price">${item.price}</p>
                  <p className="quantity">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        )}
      </div>
    )
  );
};

export default Cart;
