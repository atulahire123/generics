// ProductList.js
import React from 'react';
import PropTypes from 'prop-types';
//import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <h3>{product.title}</h3>
          {product.images && product.images.length > 0 && (
            <img src={product.images[0]} alt={product.title} />
          )}
          <p>${product.price.toFixed(2)}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductList;
