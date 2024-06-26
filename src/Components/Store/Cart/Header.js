import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './Header.css';

const Header = () => {
  const { showCart, setShowCart } = useContext(CartContext);
  const location = useLocation();
  const isStorePage = location.pathname === '/store';

  const renderAlbumButton = () => (
    location.pathname === '/' && (
      <div className="header-buttons">
        <button className="album-button">Get our Latest Album</button>
      </div>
    )
  );

  const renderCartButton = () => (
    isStorePage && (
      <div className="header-buttons">
        <button className="cart-button" onClick={() => setShowCart(!showCart)}>
          Cart
        </button>
      </div>
    )
  );

  return (
    <div className="header-container">
      <nav className="nav">
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')} end>Home</NavLink></li>
          <li><NavLink to="/store" className={({ isActive }) => (isActive ? 'active-link' : '')}>Store</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink></li>
        </ul>
      </nav>
      <div className="header">
        <h1>The Generics</h1>
        {renderAlbumButton()}
        {renderCartButton()}
      </div>
    </div>
  );
};

export default Header;
