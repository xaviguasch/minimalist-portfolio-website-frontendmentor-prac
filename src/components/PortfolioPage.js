import React, { useState } from 'react'

import './PortfolioPage.css'

const PortfolioPage = () => {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <div className='PortfolioPage'>
      {!showDetail && (
        <div className='PortfolioPage--main'>
          <h1>PortfolioPage</h1>
        </div>
      )}

      {showDetail && (
        <div className='PortfolioPage--detail'>
          <h1>Detail</h1>
        </div>
      )}
    </div>
  )
}

export default PortfolioPage
