import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Cart/Header';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Cart/Footer';
import { CartContext } from './Context/CartContext';
import About from './Components/About/About';

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

function Album({ album }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="album">
      <h3>{album.title}</h3>
      <img src={album.imageUrl} alt={album.title} />
      <p>${album.price}</p>
      <button onClick={() => addToCart(album)}>Add to Cart</button>
    </div>
  );
}

function Home() {
  const { setShowCart } = useContext(CartContext);

  return (
    <>
      <h2>MUSIC</h2>
      <div className="albums">
        {albums.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </div>
      <Cart />
      <div className="bottom-cart-button-container">
        <button className="cart-button-bottom" onClick={() => setShowCart(true)}>
          See Cart
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
