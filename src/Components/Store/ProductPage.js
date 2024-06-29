// src/Components/Store/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

const products = [
  {
    title: 'Album 1',
    price: 100,
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    ],
    reviews: [
      'Great album!',
      'Loved the songs.',
    ],
  },
  {
  // ... other products
  title: 'Album 2',
  price: 50,
  images: ['https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  ],
  reviews: [
      'Great album!',
      'Loved the songs.',
    ],
},
{
  title: 'Album 3',
  price: 70,
  images:[ 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  ],
  reviews: [
      'Great album!',
      'Loved the songs.',
    ],
},
{
  title: 'Album 4',
  price: 80,
  images:[ 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  ],
  reviews: [
      'Great album!',
      'Loved the songs.',
    ],
},
{
  title: 'Album 5',
  price: 60,
  images:['https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  ],
  reviews: [
      'Great album!',
      'Loved the songs.',
    ],
  },
{
  title: 'Album 6',
  price: 90,
  images:[ 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  ],
  reviews: [
      'Great album!',
      'Loved the songs.',
    ],
  }
];


const ProductPage = () => {
  const { productId } = useParams();
  const product = products[productId];

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <div className="product-images">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <div className="product-reviews">
        <h3>Reviews</h3>
        <ul>
          {product.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
