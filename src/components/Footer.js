import React from 'react'

import { Link } from 'react-router-dom'

import Navbar from './Navbar'
import IconGroup from './IconGroup'

// Imported svgs
import { ReactComponent as Logo } from '../assets/logo.svg'

import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <Link to='/' className='Footer_link'>
        <Logo />
      </Link>

      <Navbar position='nav_footer' />

      <IconGroup position='icon-group_footer' />
    </div>
  )
}

export default Footer
