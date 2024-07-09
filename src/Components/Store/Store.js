import React, { useState, Suspense, lazy } from 'react';
import './Store.css';
import { useAuthContext } from '../Context/AuthContext';
import { useCartContext } from '../Context/CartContext';

const ProductList = lazy(() => import('./ProductList'));
const Cart = lazy(() => import('./Cart/Cart'));

const products = [
  {
    id: 1,
    title: 'Album 1',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    description: 'This is Album 1',
  },
  {
    id: 2,
    title: 'Album 2',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    description: 'This is Album 2',
  },
  {
    id: 3,
    title: 'Album 3',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    description: 'This is Album 3',
  },
  {
    id: 4,
    title: 'Album 4',
    price: 80,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    description: 'This is Album 4',
  },
  {
    id: 5,
    title: 'Album 5',
    price: 60,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    description: 'This is Album 5',
  },
  {
    id: 6,
    title: 'Album 6',
    price: 90,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    description: 'This is Album 6',
  },
];

const Store = () => {
  const { user } = useAuthContext();
  const { cartItems } = useCartContext();
  const [isCartVisible, setCartVisible] = useState(false);

  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="store-container">
      <h1>Store</h1>
      {user ? (
        <>
          <button className="cart-button" onClick={() => setCartVisible(!isCartVisible)}>
            Cart ({totalItems})
          </button>
          <Suspense fallback={<div>Loading...</div>}>
            {isCartVisible && <Cart />}
            <ProductList products={products} />
          </Suspense>
        </>
      ) : (
        <p>Please log in to see the products.</p>
      )}
    </div>
  );
};

export default Store;
