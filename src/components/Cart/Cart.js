import React from 'react';

const Cart = ({ cart }) => {
    console.log('cart: ',cart)
  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
