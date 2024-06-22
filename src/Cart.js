import React, { useState } from 'react';
import './Cart.css';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  }
];

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(cartElements);

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
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
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.imageUrl} alt={item.title} />
                <div className="item-details">
                  <p className="title">{item.title}</p>
                  <p className="price">${item.price}</p>
                  <p className="quantity">Quantity: {item.quantity}</p>
                  <button className="remove-btn" onClick={() => removeItem(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
