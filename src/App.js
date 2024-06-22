import React from 'react';
import './App.css';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const App = () => {
  return (
    <div className="App">
      <h1>Product Showcase</h1>
      <div className="product-list">
        {productsArr.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.imageUrl} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
