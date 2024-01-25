import React from 'react';
import './ItemComponent.css';
import { motion } from 'framer-motion';

const entryAnimationVariants = {
    hidden: {
        opacity: 0,
        scale: 0.5, 
        y: -50,
    },
    visible: {
        opacity: 1,
        scale: 1, 
        y: 0, 
        transition: {
            duration: 0.5,
        },
    },
};



const ItemComponent = (props) => {
    return (
        <motion.div className='item'
            variants={entryAnimationVariants}
            initial='hidden'
            animate='visible'
            transition={{ delay: props.index * 0.1 }}
            whileHover={{ scale: 1.1 }}>
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
        </motion.div>
    );
};

export default ItemComponent;
