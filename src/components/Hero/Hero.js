import React from 'react'
import './Hero.css'
import  '../Header/Header.css';

function Hero() {
  return (
    <div className='Hero'>
        <div className='hero-text'>
        <span className='hero-first'> <div className="box"></div>We have now launched operations in Europe.</span>
        <span className='hero-hire'>Hire the best </span>
        <span className='hero-market'>Marketing Team.</span>
        <div><button>Read Customer Stories</button></div>
        
        </div>
        <div className='video'>
            <iframe src="https://player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1" frameborder="0"></iframe>
        </div>
        
    </div>
  )
}

export default Hero