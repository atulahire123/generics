import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext'; // Adjust import path as needed
import { Link } from 'react-router-dom';
import './Store.css';

const Store = ({ products }) => {
  const { addToCart, cartItems, removeItem, calculateTotal } = useContext(CartContext);

  if (!products) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div>
      <h1>Store</h1>
      <ul className="albums">
        {products.map((product, index) => (
          <li key={index} className="album">
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <Link to="/cart">Go to Cart</Link> {/* Link to Cart page */}
    </div>
  );
};

export default Store;
