import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import './PortfolioPage.css'

// Imported images and data
import projectsData from '../data/projectsData'

const PortfolioPage = () => {
  const [showPortfolioDetail, setShowPortfolioDetail] = useState(false)

  return (
    <div className='PortfolioPage'>
      {!showPortfolioDetail && (
        <div className='PortfolioPage--main'>
          <h1>PortfolioPage</h1>

          {projectsData.map((pd) => {
            return (
              <div key={pd.name}>
                <img src={pd.images.mobile.portfolio} alt={`${pd.name}`} />
                <h2>{pd.name}</h2>
                <p>{pd.description}</p>
                <Link to={`/portfolio/${pd.name}`}>view project</Link>
              </div>
            )
          })}
        </div>
      )}

      <Outlet />
    </div>
  )
}

export default PortfolioPage
