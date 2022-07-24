import React from 'react'
import { Outlet } from 'react-router-dom'

import Together from './Together'

const PortfolioContainer = () => {
  return (
    <div>
      <Outlet />

      <Together />
    </div>
  )
}

export default PortfolioContainer
