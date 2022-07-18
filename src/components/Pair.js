import React from 'react'

import { Link } from 'react-router-dom'

import './Pair.css'

const Pair = ({ title, text, buttonText, img }) => {
  return (
    <div className='Pair'>
      <img src={img} className='pair__img' alt='headshot' />
      <div className='pair__copy'>
        <h2 className='title title--md'>{title}</h2>
        <p className='text'>{text}</p>

        <Link to='/portfolio' className='btn btn--alt'>
          {buttonText}
        </Link>
      </div>
    </div>
  )
}

export default Pair
