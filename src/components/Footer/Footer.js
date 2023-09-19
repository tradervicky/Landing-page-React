import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='Footer'>
        <div className="Footer-logo">
            <img src="/media/logo.svg" alt="logo" />
            <p>Treact</p>
        </div>
        <div className="FooterMenu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>Reviews</li>
            </ul>
        </div>
        <div className="Social-icon">
          <img src="/media/fb.svg" alt="fb" />
          <img src="/media/twitter.svg" alt="twitter" />
          <img src="/media/yt.svg" alt="youtube" />
        </div>
        <span>© Copyright 2020, Treact Inc. All Rights Reserved.</span>
    </div>
  )
}

export default Footer