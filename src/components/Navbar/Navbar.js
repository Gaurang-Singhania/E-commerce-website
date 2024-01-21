// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Images/logo.png';
import cart from '../Images/cart.jpg';

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img className='nav-web-logo' src={logo} alt='/'></img>
        <p>SHOPLIC</p>
      </div>
      <ul className='nav-menu'>
        <li className={activeCategory === '/' ? 'active' : ''} onClick={() => setActiveCategory('/')}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link></li>
        <li className={activeCategory === '/smartphones' ? 'active' : ''} onClick={() => setActiveCategory('/smartphones')}><Link style={{ textDecoration: 'none' }} to='/smartphones'>Smartphones</Link></li>
        <li className={activeCategory === '/laptops' ? 'active' : ''} onClick={() => setActiveCategory('/laptops')}><Link style={{ textDecoration: 'none' }} to='/laptops'>Laptops</Link></li>
        <li className={activeCategory === '/furniture' ? 'active' : ''} onClick={() => setActiveCategory('/furniture')}><Link style={{ textDecoration: 'none' }} to='/furniture'>Furniture</Link></li>
        <li className={activeCategory === '/skincare' ? 'active' : ''} onClick={() => setActiveCategory('/skincare')}><Link style={{ textDecoration: 'none' }} to='/skincare'>Skincare</Link></li>
        <li className={activeCategory === '/groceries' ? 'active' : ''} onClick={() => setActiveCategory('/groceries')}><Link style={{ textDecoration: 'none' }} to='/groceries'>Groceries</Link></li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/Loginpage'><button>Login</button></Link>
        <Link to='/Cart'><img className='nav' src={cart} alt='/'></img></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};

export default Navbar;
