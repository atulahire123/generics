// src/Components/Home/Home.js
import React from 'react';
import './Home.css'; // Assuming you will add some custom styles here

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to The Generics</h1>
      <div className="home-content">
        <img src='https://prasadyash2411.github.io/ecom-website/Album%201.png' alt='Album' className="home-image" />
        <p>Your one-stop shop for the best music albums. Explore our store to find your favorites!</p>
      </div>
    </div>
  );
};

export default Home;
