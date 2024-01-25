// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Images/logo.png';
import cart from '../Images/cart.jpg';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className='navbar'>
      <motion.div className='nav-logo'
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}>
        <img className='nav-web-logo' src={logo} alt='/'></img>
        <p>SHOPLIC</p>
      </motion.div>
      <motion.ul className='nav-menu'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}>
        <motion.li className={activeCategory === '/' ? 'active' : ''} whileHover={{ scale: 1.2 }} onClick={() => setActiveCategory('/')}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link></motion.li>
        <motion.li className={activeCategory === '/smartphones' ? 'active' : ''} whileHover={{ scale: 1.2 }} onClick={() => setActiveCategory('/smartphones')}><Link style={{ textDecoration: 'none' }} to='/smartphones'>Smartphones</Link></motion.li>
        <motion.li className={activeCategory === '/laptops' ? 'active' : ''} whileHover={{ scale: 1.2 }} onClick={() => setActiveCategory('/laptops')}><Link style={{ textDecoration: 'none' }} to='/laptops'>Laptops</Link></motion.li>
        <motion.li className={activeCategory === '/furniture' ? 'active' : ''} whileHover={{ scale: 1.2 }} onClick={() => setActiveCategory('/furniture')}><Link style={{ textDecoration: 'none' }} to='/furniture'>Furniture</Link></motion.li>
        <motion.li className={activeCategory === '/skincare' ? 'active' : ''} whileHover={{ scale: 1.2 }} onClick={() => setActiveCategory('/skincare')}><Link style={{ textDecoration: 'none' }} to='/skincare'>Skincare</Link></motion.li>
        <motion.li className={activeCategory === '/groceries' ? 'active' : ''} whileHover={{ scale: 1.2 }} onClick={() => setActiveCategory('/groceries')}><Link style={{ textDecoration: 'none' }} to='/groceries'>Groceries</Link></motion.li>
      </motion.ul>
      <motion.div className='nav-login-cart'
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}>
        <Link to='/Loginpage'><motion.button whileHover={{ scale: 1.1 }}>Login</motion.button></Link>
        <Link to='/Cart'><img className='nav' src={cart} alt='/'></img></Link>
        <div className='nav-cart-count'>0</div>
      </motion.div>
    </div>
  );
};

export default Navbar;
