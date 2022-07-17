import React from 'react'
import { Outlet } from 'react-router-dom'

import Together from './Together'

const PortfolioContainer = () => {
  return (
    <div>
      <h2>PortfolioContainer</h2>

      <Outlet />

      <Together />
    </div>
  )
}

export default PortfolioContainer
