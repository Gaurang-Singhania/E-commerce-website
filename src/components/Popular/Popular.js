import React, { useState, useEffect } from 'react';
import './Popular.css';
import ItemComponent from '../Item/ItemComponent.js';

const Popular = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products/category/smartphones');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const { products } = data;
            setProducts(products);
        } catch (error) {
            console.error('There was a problem fetching the data:', error);
        }
    };

    return (
        <div className='popular'>
            <h1>POPULAR IN SMARTPHONES</h1>
            <hr />
            <div className='popular-item'>
                {products.map((product) => (
                    <ItemComponent
                        key={product.id}
                        id={product.id}
                        name={product.title}
                        description={product.description}
                        price={product.price}
                        brand={product.brand}
                        category={product.category}
                        thumbnail={product.thumbnail}
                        images={product.images}
                        discount={product.discountPercentage}
                        rating={product.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default Popular;
