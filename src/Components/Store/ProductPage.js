

// ProductPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductPage.css';

export const products = [
  {
    title: 'Album 1',
    price: 100,
    images: ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png'],
    reviews: ['Great album!', 'Loved the songs.'],
  },
  {
    title: 'Album 2',
    price: 50,
    images: ['https://prasadyash2411.github.io/ecom-website/img/Album%202.png'],
    reviews: ['Great album!', 'Loved the songs.'],
  },
  {
    title: 'Album 3',
    price: 70,
    images: ['https://prasadyash2411.github.io/ecom-website/img/Album%203.png'],
    reviews: ['Great album!', 'Loved the songs.'],
  },
  {
    title: 'Album 4',
    price: 80,
    images: ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png'],
    reviews: ['Great album!', 'Loved the songs.'],
  },
  {
    title: 'Album 5',
    price: 60,
    images: ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png'],
    reviews: ['Great album!', 'Loved the songs.'],
  },
  {
    title: 'Album 6',
    price: 90,
    images: ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png'],
    reviews: ['Great album!', 'Loved the songs.'],
  }
];

const ProductPage = () => {
  const { productId } = useParams();
  const productIndex = parseInt(productId, 10);
  const product = products[productIndex];

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="productPage">
      <h2>{product.title}</h2>
      <div className="productImages">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onError={(e) => e.target.src = 'fallback-image-url.jpg'} // Fallback image
          />
        ))}
      </div>
      <div className="productReviews">
        <h3>Reviews</h3>
        <ul>
          {product.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
      <Link to="/store" className="link">Go to Store</Link>
    </div>
  );
};

ProductPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
};

export default ProductPage;
