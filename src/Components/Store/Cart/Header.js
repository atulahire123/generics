// src/Components/Store/Cart/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <h1>The Generics</h1>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li> {/* Link to Contact Us page */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
