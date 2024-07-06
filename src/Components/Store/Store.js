import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './Store.css';

const Store = ({ products }) => {
  const { addToCart } = useContext(CartContext);

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
      <Link to="/cart" className="cart-link">Go to Cart</Link>
    </div>
  );
};

export default Store;
