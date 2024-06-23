import React from 'react';
import './App.css';
import Header from './Components/Cart/Header';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Components/Context/CartContext'; // Update the path as per your project structure

const albums = [
  {
    title: 'Album 1',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Album 2',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Album 3',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Album 4',
    price: 80,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Album 5',
    price: 60,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Album 6',
    price: 90,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  }
];

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <h2>MUSIC</h2>
        <div className="albums">
          {albums.map((album, index) => (
            <div key={index} className="album">
              <h3>{album.title}</h3>
              <img src={album.imageUrl} alt={album.title} />
              <p>${album.price}</p>
              <Cart album={album} />
            </div>
          ))}
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
