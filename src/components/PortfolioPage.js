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
              <div key={pd.name}>
                <img src={pd.images.mobile.portfolio} alt={`${pd.name}`} />
                <div className='portfolio-info'>
                  <h2 className='title title--md'>{pd.name}</h2>
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

      <Outlet />
    </div>
  )
}

export default PortfolioPage
