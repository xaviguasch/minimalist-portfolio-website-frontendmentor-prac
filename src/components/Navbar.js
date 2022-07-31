import React, { useState } from 'react'

import { Link } from 'react-router-dom'

// Imported svgs
import { ReactComponent as HamburgerSVG } from '../assets/icons/hamburger.svg'
import { ReactComponent as CloseBtnSVG } from '../assets/icons/close.svg'

import './Navbar.css'

const Navbar = ({ position, onHandleNavOpen, mobileNavOpen }) => {
  const handleNavBtnClick = () => {
    onHandleNavOpen()
  }

  // Close the open nav modal on mobile after clicking a link
  const handleNavOpenClick = () => {
    onHandleNavOpen(false)
  }

  return (
    <div className={position}>
      <div className='hamburger'>
        {mobileNavOpen ? (
          <CloseBtnSVG onClick={handleNavBtnClick} />
        ) : (
          <HamburgerSVG onClick={handleNavBtnClick} />
        )}
      </div>
      <ul
        className={`${mobileNavOpen ? 'navigation-open' : 'navigation-menu'}`}
        onClick={handleNavOpenClick}
      >
        <li>
          <Link className='link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='link' to='/portfolio'>
            Portfolio
          </Link>
        </li>
        <li>
          <Link className='link' to='/contact'>
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
