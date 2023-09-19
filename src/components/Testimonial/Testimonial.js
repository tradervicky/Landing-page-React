import React from 'react'
import './Testimonial.css'

function Testimonial() {
  return (
    <div className='Testimonial'>
        <div className="Testimonial-text">
            <h3>Testimonials</h3>
            <h1>Our Clients <span>Love Us.</span></h1>
            <p>Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h4 className='quote-testimonial'><img src="/media/quote1.svg" alt="" /> Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. <img src="/media/quote2.svg" alt="" /></h4>
            <div className="Testimonial-text-img">
                <img src="/media/author.jpg" alt="author of quote" />
                <div className="author-name">
                    <span id='at-name'>Charlotte Hale</span>
                    <span id='at-ceo'>CEO, Tesla Inc.</span>
                </div>
            </div>       
        </div>
        <div className="Testimonial-sideImg">
                <img src="/media/author-background.jpg" alt="author-side image" />
            </div>
    </div>
  )
}

export default Testimonial