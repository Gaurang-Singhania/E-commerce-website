import React from 'react'
import './Footer.css'
import logo from '../Images/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={logo}></img>
        <p>SHOPLIC</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      
    </div>
  )
}

export default Footer
