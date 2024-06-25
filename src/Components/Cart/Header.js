import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Header.css';

const Header = () => {
  const { showCart, setShowCart } = useContext(CartContext);

  return (
    <div className="header-container">
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#store">Store</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <div className="header">
        <h1>The Generics</h1>
        <button className="cart-button" onClick={() => setShowCart(!showCart)}>
          Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
