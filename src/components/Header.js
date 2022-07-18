import React from 'react'

import { Link } from 'react-router-dom'

import Navbar from './Navbar'

// Imported svgs
import { ReactComponent as Logo } from '../assets/logo.svg'

import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
      <Link to='/'>
        <Logo />
      </Link>
      <Navbar />
    </div>
  )
}

export default Header
