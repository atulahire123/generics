// Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header>
    
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          {isAuthenticated ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={logout}>Logout</button></li>
              <h1>The generic</h1>

            </>
            
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
