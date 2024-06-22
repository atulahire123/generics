import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <h1>The Generics</h1>
    </header>
  );
};

export default Header;
