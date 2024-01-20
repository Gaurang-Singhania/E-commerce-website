import React from 'react'
import './Hero.css'
import hero_image from '../Images/hero_image.jpeg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>GRAB THE LATEST ARRIVALS HERE!!</h2>
                <div>
                    <p>COLLECTIONS</p>
                    <p>FOR EVERYONE</p>
                </div>
                <div className='hero-latest-button'>
                    <div>Click For Latest</div>
                </div>
            </div>
            <div className='hero-right'>
                <img src={hero_image}></img>
            </div>
        </div>
    )
}

export default Hero
