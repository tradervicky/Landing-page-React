import React from 'react'
import './Experties.css'
function Experties() {
  return (
    <div className='Experties-main'>

      <div className="Experties-text">
        <span className='Experties-title' >Our Expertise</span>
        <h3 className='Experties-heading'>We have the most <span> professional </span> marketing team.</h3>
        <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


        <div className="Experties-category">
          
          <div className="Experties-category-icon">
            <img src="/media/bag.svg" alt="" />
          </div>
          <div className="Experties-category-text">
            <span>Professionalism</span>
            <p>We have the best professional marketing people across the globe just to work with you.</p>
          </div>
        </div>
        <div className="Experties-category">
          <div className="Experties-category-icon">
            <img src="/media/dollar.svg" alt="" />

          </div>
          <div className="Experties-category-text">
            <span>Affordable</span>
            <p>We promise to offer you the best rate we can - at par with the industry standard.</p>
          </div>
          
        </div>
        <div className="Experties-category-text-btn">
            <button>See Our Portfolio</button>
          </div>
        

      </div>
      <div className="Experties-img">
        <img src="/media/team.svg" alt="team" />
      </div>

    </div>
  )
}

export default Experties