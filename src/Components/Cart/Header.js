import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './Header.css';

const Header = () => {
  const { showCart, setShowCart } = useContext(CartContext);

  return (
    <div className="header-container">
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/about">About</Link></li>
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
