// Category.js
import React, { useState, useEffect } from 'react';
import './category.css';
import Cart from '../Cart/Cart'
import { motion } from 'framer-motion';

const Category = ({ category, cart, setCart }) => {

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(`Error fetching ${category} data:`, error);
      }
    };

    fetchProducts();
  }, [category]);



  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / productsPerPage);
  const numbers = [...Array(npage).keys()].map((number) => number + 1);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const newCart = Array.isArray(prevCart) ? [...prevCart, product] : [product];
      return newCart;
    });
  };

  return (
    <div className='category-grid'>
      {Array.isArray(records) ? (
        records.map((product) => (
          <motion.div key={product.id} className='item1'
            initial={{ opacity: 0 }} // Initially invisible
            animate={{ opacity: 1 }} // Fade in
            transition={{ duration: 1, ease: 'easeOut' }} >
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.name}</p>
            <div className='brand-name'>
              <p><u>Brand:</u> {product.brand}</p>
            </div>
            <div className='title-desc'>
              <p>Title: {product.title}</p>
              <p>Description: {product.description}</p>
            </div>
            <div className='item1-prices'>
              <div className='item1-price-new'>
                ${product.price}
              </div>
              <div className='item1-rating'>
                Rating: {product.rating}
              </div>
              <div className='item1-discount'>
                {product.discountPercentage}% off
              </div>
            </div>
            <button className='cartButton' onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </motion.div>
        ))
      ) : (
        <p>No products available</p>
      )}
      <motion.div className='pagination'
      initial={{ opacity: 0 }} // Initially invisible
      animate={{ opacity: 1 }} // Fade in
      transition={{ duration: 1, ease: 'easeOut' }} >
        <p>Pages: </p>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`pagination-button ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
      </motion.div>

    </div>
  );
};

export default Category;
