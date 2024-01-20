// Category.js
import React, { useState, useEffect } from 'react';

const Category = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(`Error fetching ${category} data:`, error); 
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      {Array.isArray(products) ? (
        products.map((product) => (
          <div key={product.id} className='item'>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.name}</p>
            <div className='item-prices'>
              <div className='item-price-new'>
                ${product.price}
              </div>
              <div className='item-rating'>
                Rating: {product.rating}
              </div>
              <div className='item-discount'>
                {product.discount}% off
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Category;
