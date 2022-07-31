import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import Navbar from './Navbar'

// Imported svgs
import { ReactComponent as Logo } from '../assets/logo.svg'

import './Header.css'

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const handleNavOpen = () => {
    setMobileNavOpen((prev) => !prev)
  }

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
