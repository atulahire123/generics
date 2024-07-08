// src/Components/Store/ProductPage.js
import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import './ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://crudcrud.com/api/c5f4e23682e3445f801728e54f6aa01e
/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  const deleteProduct = async () => {
    try {
      await axios.delete(`https://crudcrud.com/api/c5f4e23682e3445f801728e54f6aa01e
/products/${productId}`);
      navigate('/store');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="productPage">
      <h2>{product.title}</h2>
      <div className="productImages">
        <img src={product.imageUrl} alt={product.title} onError={(e) => e.target.src = 'fallback-image-url.jpg'} />
      </div>
      <button onClick={deleteProduct}>Delete Product</button>
      <Link to="/store" className="link">Go to Store</Link>
    </div>
  );
};

export default ProductPage;
