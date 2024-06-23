import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <h3>{product.title}</h3>
          <img src={product.imageUrl} alt={product.title} />
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
