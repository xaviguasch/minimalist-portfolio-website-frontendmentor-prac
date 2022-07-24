import React from 'react'

import { Link } from 'react-router-dom'

import './Together.css'

const Together = () => {
  return (
    <div className='Together'>
      <h2 className='title title--lg'> Interested in doing a project together?</h2>
      <Link to='/contact' className='btn btn--alt'>
        Contact Me
      </Link>
    </div>
  )
}

export default Together
