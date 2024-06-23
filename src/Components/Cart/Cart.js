import React, { useContext, useState } from 'react';
import './Cart.css';
import { CartContext } from '../Context/CartContext'; // Update the path as per your project structure

const Cart = ({ album }) => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false); // Define showCart and setShowCart

  const handleAddToCart = () => {
    addItemToCart(album);
  };

  const handleRemoveFromCart = (index) => {
    removeItemFromCart(index);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <button className="cart-icon" onClick={() => setShowCart(!showCart)}>
        Cart
      </button>
      {showCart && (
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
                    <button className="remove-btn" onClick={() => handleRemoveFromCart(index)}>
                      Remove
                    </button>
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
      )}

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
