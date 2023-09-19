import React from 'react'
import './TwoColumn.css'

function TwoColumn() {
  return (
    <div className='TwoColumn'>
        <div>
            <img src="/media/statsSecond.svg" alt="twoColumn-image" />
        </div>
        <div className="TwoColumn-text">
            <span className='TwoColumn-Toptext' >Our Track Record</span>
            <h1>We have been doing this since  <span>1999.</span> </h1>
            <p className='TwoColumnPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="record">
                <div>
                    <p className="clientNo">2282+</p>
                    <p className="clientText">Clients</p>
                </div>
                <div>
                    <p className="clientNo">3891+</p>
                    <p className="clientText">Projects</p>
                </div>
                <div className="awards">
                    <p className="clientNo">1000+</p>
                    <p className="clientText">Awards</p>
                </div>
            </div>
            <button>Learn More</button>
        </div>
    </div>
  )
}

export default TwoColumn