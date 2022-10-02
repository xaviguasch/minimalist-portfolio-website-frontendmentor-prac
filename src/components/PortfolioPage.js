import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './PortfolioPage.css'

// Imported images and data
import projectsData from '../data/projectsData'

const PortfolioPage = () => {
  return (
    <div className='PortfolioPage'>
      {
        <div className='PortfolioPage--main'>
          {projectsData.map((pd) => {
            return (
              <div className='portfolio' key={pd.name}>
                <div className='portfolio__img-container'>
                  <img
                    className='portfolio__img--mobile'
                    src={pd.images.mobile.portfolio}
                    alt={`${pd.name}`}
                  />
                  <img
                    className='portfolio__img--tablet'
                    src={pd.images.tablet.portfolio}
                    alt={`${pd.name}`}
                  />
                  <img
                    className='portfolio__img--desktop'
                    src={pd.images.desktop.portfolio}
                    alt={`${pd.name}`}
                  />
                </div>
                <div className='portfolio__info'>
                  <h2 className='title title--lg'>{pd.name}</h2>
                  <p className='text'>{pd.description}</p>
                  <Link to={`/portfolio/${pd.name}`} className='btn btn--alt'>
                    view project
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      }
      {/* Possibly unnecessary Outlet, delete if so */}
      {/* <Outlet /> */}
    </div>
  )
}

export default PortfolioPage
