import React from 'react'
import { useParams } from 'react-router-dom'

import './PortfolioDetail.css'

const PortfolioDetail = () => {
  let params = useParams()
  console.log(params)

  return (
    <div className='PortfolioDetail'>
      <h2>PortfolioDetail</h2>
      <p>{params.projectName}</p>
    </div>
  )
}

export default PortfolioDetail
