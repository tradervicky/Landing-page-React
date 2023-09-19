import React, { useState } from 'react'
import "./NavBar.css"
function NavBar() {
    const [showIcon, setShowIcon] = useState(false)
  return (
    <>
    <div className="mainNav ">
        
        <div className="logo">
            <img src="/media/logo.svg" alt="logo" />
            <p>Treact</p>
        </div>
        <div className="hamb">
            <img src="/media/hamburger.svg" alt="hambicon" onClick={()=>setShowIcon(!showIcon)} />
        </div>
        
        <div className={showIcon ? "menu mobile-menu-link" : "menu"}>
            <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Location</li>
                <li>Pricing</li>
            </ul>
        </div>
        <div className="navbtn">
            <button>Hire Us</button>
        </div>
    </div>
    </>
  )
}

export default NavBar