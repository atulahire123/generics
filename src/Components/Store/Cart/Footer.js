// src/Components/Store/Cart/Footer.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="footer-container">
    <h3>The Generics</h3>
      {!isHomePage && (
        <div className="social-icons">
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="path_to_youtube_logo" alt="YouTube" />
        </a>
        <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
          <img src="path_to_spotify_logo" alt="Spotify" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="path_to_facebook_logo" alt="Facebook" />
        </a>
      </div>
      )}
      
    </footer>
  );
};

export default Footer;
