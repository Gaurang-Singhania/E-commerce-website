// Category.js
import React, { useState, useEffect } from 'react';
import './category.css';
import Cart from '../Cart/Cart'

const Category = ({ category }) => {

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

  const [cart, setCart] = useState([]);

  const handleAddToCart = (productId) => {

    const selectedProduct = products.find((product) => product.id === productId);
    setCart((prevCart) => [...prevCart, selectedProduct]);
    console.log(`Product added to cart: ${productId}`);
  };

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / productsPerPage);
  const numbers = [...Array(npage).keys()].map((number) => number + 1);

  return (
    <div className='category-grid'>
      {Array.isArray(records) ? (
        records.map((product) => (
          <div key={product.id} className='item1'>
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
            <button className='cartButton' onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
      <div className='pagination'>
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
      </div>
      <Cart cart={cart} />

    </div>
  );
};

export default Category;
