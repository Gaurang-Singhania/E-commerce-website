import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Cart as CartContext } from '../Context';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

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
            <Card shadow="sm" key={item.id} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.thumbnail}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.name}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;

