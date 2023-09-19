import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio'>
        <div className="portfolio-card">
            <div><img src="/media/portfolio1.jpg" alt="portfolio 1" /></div>


           < div className='portfolio-flex' > 
           <span className='portfolio-flex-first' >Tesla Inc.</span> 
           <span className='portfolio-flex-second'>Ad Campaign</span>
           </div>
            <p className='portfolio-card-text'>Personalized Ad Campaign using Google AdWords</p>
            <div className="location-portfolio">
              <div className="location-portfolio-clk">
                <img src="/media/clock.svg" alt="clock" />
                <span>90 DAYS CAMPAIGN</span>
              </div>
              <div className="location-portfolio-clk">
                <img src="/media/location.svg" alt="" />
                <span>NEW YORK</span>
              </div>
            </div>
            <button className='portfolio-card-button'>Read Case Study</button>
        </div>
        <div className="portfolio-card">
           <div><img src="/media/portfolio2.jpg" alt="location" /></div> 

           < div className='portfolio-flex' > 
           <span className='portfolio-flex-first' >Nestle</span> 
           <span className='portfolio-flex-second'>SEO Marketing</span>
            </div>


            <p className='portfolio-card-text'>Ranking #1 for keywords like Chocolate, Snack</p>
            <div className="location-portfolio">
              <div className="location-portfolio-clk">
                <img src="/media/clock.svg" alt="" />
                <span>180 DAYS CAMPAIGN</span>
              </div>
              <div className="location-portfolio-clk">
                <img src="/media/location.svg" alt="location" />
                <span>PALO ALTO</span>
              </div>
            </div>
            <button className='portfolio-card-button'>Read Case Study</button>
        </div>
        <div className="portfolio-second-section">
            <span className='portfolio-second-section-head'>Our Portfolio</span>
            <h3> We've done some <span>amazing projects.</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
            <div className="arrow"><a href="#">View all Projects <img src="/media/arrow.svg" alt="arrow" /></a></div>
        </div>
    </div>
  )
}

export default Portfolio