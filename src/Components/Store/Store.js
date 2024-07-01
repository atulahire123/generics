


// src/Components/Store/Store.js
import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Store.css';

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

const Store = () => {
  const { setShowCart, addToCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingAlbumIndex, setLoadingAlbumIndex] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = async (album, index) => {
    setIsLoading(true);
    setLoadingAlbumIndex(index);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating network delay
    addToCart(album);
    setShowCart(true);
    setIsLoading(false);
    setLoadingAlbumIndex(null);
  };

  const handleProductClick = (index) => {
    navigate(`/product/${index}`);
  };

  return (
    <div className="store-container">
      <h2>Music</h2>
      <div className="albums">
        {albums.map((album, index) => (
          <div key={index} className="album" onClick={() => handleProductClick(index)}>
            <h3>{album.title}</h3>
            <img src={album.imageUrl} alt={album.title} />
            <p>${album.price}</p>
            <button
              onClick={(e) => { e.stopPropagation(); handleAddToCart(album, index); }}
              disabled={isLoading && loadingAlbumIndex === index}
            >
              {isLoading && loadingAlbumIndex === index ? 'Adding...' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
      <div className="bottom-cart-button-container">
        <button className="cart-button-bottom" onClick={() => setShowCart(true)}>
          See Cart
        </button>
      </div>
      {isLoading && loadingAlbumIndex === null && (
        <div className="loader">Adding to cart...</div>
      )}
    </div>
  );
};

export default Store;
