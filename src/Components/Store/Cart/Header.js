import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './Header.css';

const Header = () => {
  const { showCart, setShowCart } = useContext(CartContext);

  return (
    <div className="header-container">
      <nav className="nav">
        <ul>
          <li><NavLink to="/" activeClassName="active-link" end>Home</NavLink></li>
          <li><NavLink to="/store" activeClassName="active-link">Store</NavLink></li>
          <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
        </ul>
      </nav>
      <div className="header">
        <h1>The Generics</h1>
        <div className="header-buttons">
          <button className="album-button">Get our Latest Album</button>
          <button className="cart-button" onClick={() => setShowCart(!showCart)}>
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
