import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Cart as CartContext } from '../Context';
import './Cart.css'

const Cart = () => {
  const { cart: contextCart } = useContext(CartContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart data from localStorage when the component mounts
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart data to localStorage whenever the cart state changes
    localStorage.setItem('cart', JSON.stringify(contextCart));
  }, [contextCart]);


  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      {contextCart.length > 0 ? (
        contextCart.map((item) => (
          <motion.div key={item.id} className='item1'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.name}</p>
            <div className='brand-name'>
              <p><u>Brand:</u> {item.brand}</p>
            </div>
            <div className='title-desc'>
              <p>Title: {item.title}</p>
              <p>Description: {item.description}</p>
            </div>
            <div className='item1-prices'>
              <div className='item1-price-new'>
                ${item.price}
              </div>
              <div className='item1-rating'>
                Rating: {item.rating}
              </div>
              <div className='item1-discount'>
                {item.discountPercentage}% off
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
