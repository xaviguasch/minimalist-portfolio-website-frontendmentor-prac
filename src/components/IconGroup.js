import React from 'react'

// Imported svgs
import { ReactComponent as GithubSVG } from '../assets/icons/github.svg'
import { ReactComponent as TwitterSVG } from '../assets/icons/twitter.svg'
import { ReactComponent as LikendinSVG } from '../assets/icons/linkedin.svg'

import './IconGroup.css'

const IconGroup = ({ position }) => {
  return (
    <div className={position}>
      <ul className='icon-list'>
        <li>
          <a href='#'>
            <GithubSVG />
          </a>
        </li>
        <li>
          <a href='#'>
            <TwitterSVG className='twitter-icon' />
          </a>
        </li>
        <li>
          <a href='#'>
            <LikendinSVG />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default IconGroup
