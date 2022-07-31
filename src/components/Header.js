import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import Navbar from './Navbar'

// Imported svgs
import { ReactComponent as Logo } from '../assets/logo.svg'

import './Header.css'

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleNavOpen = () => {
    setMobileNavOpen((prev) => !prev)
  }

  // closes the navigation modal on mobile if you resize the window
  // while the modal still open
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    if (windowWidth >= 650) {
      setMobileNavOpen(false)
    }
  }, [windowWidth])

  return (
    <div className='Header'>
      <Link to='/' className='Header_link'>
        <Logo />
      </Link>
      <Navbar
        position='nav_header'
        onHandleNavOpen={handleNavOpen}
        mobileNavOpen={mobileNavOpen}
      />
    </div>
  )
}

export default Header
