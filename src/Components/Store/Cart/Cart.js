import React, { useState, useEffect } from 'react';
import { useCartContext } from '../../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, updateQuantity } = useCartContext();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotalAmount(total);
    };
    calculateTotal();
  }, [cartItems]);

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id} className="cart-item">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <img src={item.imageUrl} alt={item.title} />
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
              min="1"
            />
          </li>
        ))}
      </ul>
      <div className="total">
        <h3>Total: ${totalAmount}</h3>
      </div>
    </div>
  );
};

export default Cart;
