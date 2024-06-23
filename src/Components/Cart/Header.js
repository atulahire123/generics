import React from 'react';

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#store">Store</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#cart">Cart</a></li>
        </ul>
      </nav>
      <div className="header">
        <h1>The Generics</h1>
      </div>
    </div>
  );
};

export default Header;
