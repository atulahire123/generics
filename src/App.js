import React from 'react';
import './App.css';
import Header from './Header';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <h2>MUSIC</h2>
      <div className="albums">
        <div className="album">
          <h3>Album 1</h3>
          <img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" alt="Album 1" />
        </div>
        <div className="album">
          <h3>Album 2</h3>
          <img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" alt="Album 2" />
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default App;
