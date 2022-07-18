import React from 'react'

import Navbar from './Navbar'
import IconGroup from './IconGroup'

import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <h2>Footer</h2>
      <Navbar position='nav_footer' />
      <IconGroup />
    </div>
  )
}

export default Footer
