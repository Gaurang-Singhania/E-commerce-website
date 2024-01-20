import React, { useState, useEffect } from 'react';
import './Popular.css';
import Item from '../Item/Item.js';

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
                {products.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.title}
                        description={item.description}
                        price={item.price}
                        brand={item.brand}
                        category={item.category}
                        thumbnail={item.thumbnail}
                        images={item.images}
                        discount={item.discountPercentage}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default Popular;
