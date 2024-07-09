import React from 'react';
import './Product.css';
import { useCartContext } from '../Context/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useCartContext();

  return (
    <div className="product">
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
