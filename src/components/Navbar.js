import React from 'react'

import { Link } from 'react-router-dom'

// Imported svgs
import { ReactComponent as HamburgerSVG } from '../assets/icons/hamburger.svg'

import './Navbar.css'

const Navbar = ({ position }) => {
  return (
    <div className={position}>
      <div className='hamburger'>
        <HamburgerSVG />
      </div>
      <ul className='navigation-menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Me</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
