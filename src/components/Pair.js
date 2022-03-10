import React from 'react'

import './Pair.css'

const Pair = ({ img, text }) => {
  return (
    <div className='Pair'>
      <img src={img} className='pair__img' alt='headshot' />
      <div className='pair__copy'>
        <h2 className='title title--md'>About Me</h2>
        <p className='text'>{text}</p>

        <a href='#' className='btn btn--alt'>
          Go To Portfolio
        </a>
      </div>
    </div>
  )
}

export default Pair
