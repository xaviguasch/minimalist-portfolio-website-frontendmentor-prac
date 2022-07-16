import React from 'react'
import { Outlet } from 'react-router-dom'

const PortfolioContainer = () => {
  return (
    <div>
      <h2>PortfolioContainer</h2>

      <Outlet />
    </div>
  )
}

export default PortfolioContainer
