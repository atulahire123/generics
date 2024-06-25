import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h3>The Generics</h3>
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
    </footer>
  );
};

export default Footer;
