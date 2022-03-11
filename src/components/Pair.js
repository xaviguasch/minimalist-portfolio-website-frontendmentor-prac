import React from 'react'

import './Pair.css'

const Pair = ({ img, title, text, buttonText }) => {
  return (
    <div className='Pair'>
      <img src={img} className='pair__img' alt='headshot' />
      <div className='pair__copy'>
        <h2 className='title title--md'>{title}</h2>
        <p className='text'>{text}</p>

        <a href='#' className='btn btn--alt'>
          {buttonText}
        </a>
      </div>
    </div>
  )
}

export default Pair
