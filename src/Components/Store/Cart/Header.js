import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import './Header.css';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <ul>
          <h1>The Generics</h1>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          {isAuthenticated ? (
            <li><button onClick={logout}>Logout</button></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
