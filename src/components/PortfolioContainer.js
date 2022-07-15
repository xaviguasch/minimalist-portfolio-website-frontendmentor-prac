import React from 'react'
import { Outlet } from 'react-router-dom'

const PortfolioContainer = () => {
  return (
    <div>
      <p>PortfolioContainer</p>

      <Outlet />
    </div>
  )
}

export default PortfolioContainer
