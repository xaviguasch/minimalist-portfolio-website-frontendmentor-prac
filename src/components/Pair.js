import React from 'react'

import { Link } from 'react-router-dom'

import './Pair.css'

const Pair = ({ title, text, buttonText, imgMobile, imgTablet, imgDesktop }) => {
  return (
    <div className='Pair'>
      <div className='pair__img-container'>
        <img src={imgMobile} className='pair__img--mobile' alt='headshot' />
        <img src={imgTablet} className='pair__img--tablet' alt='headshot' />
        <img src={imgDesktop} className='pair__img--desktop' alt='headshot' />
      </div>
      <div className='pair__copy'>
        <h2 className='title title--lg'>{title}</h2>
        <p className='text text--md'>{text}</p>

        <Link to='/portfolio' className='btn btn--alt'>
          {buttonText}
        </Link>
      </div>
    </div>
  )
}

export default Pair
