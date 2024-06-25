import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './Store.css'; // Assuming you have a CSS file for styling

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

  const handleAddToCart = (album) => {
    addToCart(album);
    setShowCart(true);
  };

  return (
    <div className="store-container">
      <h2>Store</h2>
      <div className="albums">
        {albums.map((album, index) => (
          <div key={index} className="album">
            <h3>{album.title}</h3>
            <img src={album.imageUrl} alt={album.title} />
            <p>${album.price}</p>
            <button onClick={() => handleAddToCart(album)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
