import React from 'react'
import Hero from '../Hero/Hero'
import NavBar from '../Navbar/NavBar'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
        <NavBar/>
        <Hero/>
    </div>
  )
}

export default Header