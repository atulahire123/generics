// src/Components/Store/Store.js
import React, { useEffect, useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import axios from 'axios';
import './Store.css';

const Store = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCartContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://crudcrud.com/api/c5f4e23682e3445f801728e54f6aa01e/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div>
      <h1>Store</h1>
      <ul className="albums">
        {products.map((product, index) => (
          <li key={index} className="album">
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Store;
