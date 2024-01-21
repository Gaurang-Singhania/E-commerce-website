import React from 'react';
import './ItemComponent.css';

const ItemComponent = (props) => {
    return (
        <div className='item'>
            <img src={props.thumbnail} alt={props.title} />
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    ${props.price}
                </div>
                <div className='item-rating'>
                    Rating:{props.rating}
                </div>
                <div className='item-discount'>
                    {props.discount}% off
                </div>

            </div>
        </div>
    );
};

export default ItemComponent;
